/*
*list多选扩展
*/
Ext.define('ux.SimpleList', {
    alternateClassName: 'simpleList',
    extend: 'Ext.List',
    xtype: 'simpleList',
    config: {
        editCls: 'simpleList',
        editId: '',
        dic:'',
        //不加在长按时可能没反应
        onItemDisclosure: false,
        //是否在多选状态（不可更改）
        isSimple: false,
        //设置数据主键(可配置)
        ckId: 'id',
        //默认选择类型，用以应对多种选择情况
        defSimpleType: 0,
        //多选时弹出菜单栏(可配置)
        simpleToolBar: {
            //默认位置
            docked: 'bottom',
            //默认标题，用以应对多种选择情况
            defTitle: '删除',
            items: [{
                xtype: 'button',
                text: '全选',
                align: 'left',
                //标志是全选还是取消全选
                isSimple: true,
                listeners: {
                    tap: function (button) {
                        var list = button.up('list');
                        if (button.getText() == "全选") {
                            this.setText('取消全选');
                            list.selectAll();
                            list.selectAllRows();
                        } else {
                            this.setText('全选');
                            list.deselectAll();
                            list.unselectAllRows();
                        }
                        this.isSimple = !this.isSimple;
                    }
                }
            },
            {
                cls: 'moreButton',
                xtype: 'button',
                text: '取消',
                align: 'right',
                listeners: {
                    tap: function (button) {
                        var list = button.up('list');
                        //结束多选
                        list.endSimple(list);
                        //CSS.cleanStyleSheets();
                    }
                }
            },
             {
                 cls: 'moreButton',
                 xtype: 'button',
                 text: '确定',
                 align: 'right',
                 listeners: {
                     tap: function (button) {
                         var list = button.up('list');
                         var items = list.getSelection();
                         //获取选中项
                         var ids = [];
                         for (var i = 0,
                         item; item = items[i]; i++) {
                             ids.push(item.data[list.config.ckId]);
                         };
                         if (ids.length > 0) {
                             //触发选择成功事件list:list本身,items:被选中的行,ids:被选中key集合,list.config.simpleType:自定义配置状态
                             list.fireEvent('simpleSuccess', list, items, ids, list.config.simpleType);
                             //结束多选
                             list.endSimple(list);
                         }
                         else {
                             //结束多选
                             util.showMessage("请先选择记录后再确定，否则按取消！", true);
                         }
                     }
                 }
             }]
        },
        listeners: {
            painted: function ( element, eOpts ){
                dic = new Dictionary();
            },
            //监控是否在多选状态
            itemtap: function (list, index, target, record, e) {
                //如果在多选状态停止后续事件的执行
                if (this.config.isSimple) {
                    e.stopEvent();
                    //list.setSelectedCls('x-item-selected');
                    var dItem = this.listItems[index].getDisclosure();
                    if (dItem._hidden == true) {
                        dItem.show();
                        dic.Add(index,index);
                    }
                    else {
                        dItem.hide();
                        dic.Remove(index);
                    }
                }
            },
            //只要按键长按住就会触发，和按键是否离开没有关系
            itemtaphold: function (list, index, target, record, e) {
                //开始多选
                //this.beginSimple();
            },
            refresh: function( obj, eOpts ){
                if (this.config.isSimple) {
                    var items = obj.listItems;
                    for (var i = 0; i < items.length; i++) {
                        var dItem = items[i].getDisclosure();
                        if (dic.ContainsKey(i)) {
                            dItem.show();
                        }
                        else {
                            dItem.hide();
                        }
                    }
                }
            }
        }
    },
    //获取多选边栏
    getSimpleToolBar: function () {
        var simpleToolBar = Ext.create('Ext.TitleBar', this.config.simpleToolBar);
        simpleToolBar.addCls('deleteToolbar');
        return simpleToolBar;
    },
    //进入多选状态
    beginSimple: function (simpleType, title, editId) {
        if (!this.config.isSimple) {
            //取消全选
            this.deselectAll();
            //进入多选模式
            this.setMode('SIMPLE');
            //添加css
            this.addCls(this.config.editCls);
            //显示OnItemDisclosure
            this.setOnItemDisclosure(true);
            //加入标记，以便在itemtap事件中进行判定
            this.config.isSimple = true;
            //this.config.editId = editId;
            //应对多种选择需求
            if (simpleType) {
                this.config.simpleType = simpleType;
            } else {
                this.config.simpleType = this.config.defSimpleType;
            }
            //改变标题
            if (title) {
                this.config.simpleToolBar.title = title;
            } else {
                this.config.simpleToolBar.title = this.config.simpleToolBar.defTitle;
            }
            //添加多选边栏
            this.add(this.getSimpleToolBar());
        }
    },
    //结束多选模式
    endSimple: function () {
        var titlebar = this.down('titlebar');
        //if (this.config.editId) {
        //    Ext.getCmp(this.config.editId).show();
        //}
        if (titlebar) {
            //移除多选边栏
            titlebar.hide();
            titlebar.destroy();
            //取消全选
            this.deselectAll();
            //进入单选模式
            this.setMode('SINGLE');
            //移除css
            this.removeCls(this.config.editCls);
            //隐藏OnItemDisclosure
            this.setOnItemDisclosure(false);
            //加入标记，以便在itemtap事件中进行判定
            this.config.isSimple = false;
        }
    },
    selectAllRows: function () {
        var items = this.listItems;
        for (var i = 0,
         ln = items.length; i < ln; i++) {
            var dItem = items[i].getDisclosure();
            dItem.show();
            dic.Add(i, i);
        }
    },
    unselectAllRows: function () {
        var items = this.listItems;
        for (var i = 0,
         ln = items.length; i < ln; i++) {
            var dItem = items[i].getDisclosure();
            dItem.hide();
            dic.Remove(i);
        }
    },
    //更新OnItemDisclosure需要
    updateOnItemDisclosure: function (newConfig, oldConfig) {
        if (oldConfig == null) {
            return;
        }
        var items = this.listItems;
        for (var i = 0,
         ln = items.length; i < ln; i++) {
            var dItem = items[i].getDisclosure();
            //newConfig === false ? dItem.hide() : dItem.show();
            dItem.hide();
        }
    }
});