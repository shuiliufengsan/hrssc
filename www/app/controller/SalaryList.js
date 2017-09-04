Ext.define('ChuangCai.controller.SalaryList', {
    extend: 'Ext.app.Controller',
    config: {
        models: ['salary.BasicSalary','salary.SalaryDetails'],
        stores: ['salary.BasicSalary', 'salary.SalaryDetails'],
        views: ['salary.Home','salary.BasicSalaryBrw', 'salary.SalaryDetailsBrw'],
        control: {
            //导航栏按钮
            navBtn: {
                tap: function () {
                    util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            salaryHome: {
                itemtap: function (list, index, target, record, e) {
                    if (index == 0) {
                        this.redirectTo('redirec/basicsalaryBrw');
                    }
                    if (index == 1) {
                        this.redirectTo('redirec/salarydetailsBrw');
                    }
                }
            },
            //工作流首页

            basicsalaryBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.BasicSalaryView == undefined) {
                        Ext.Viewport.BasicSalaryView = Ext.create('ChuangCai.view.salary.BasicSalaryView');
                        //Ext.Viewport.add(Ext.Viewport.BasicSalaryView);
                    }
                    Ext.Viewport.BasicSalaryView.setRecord(record);
                    this.redirectTo('redirec/basicsalaryView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    Ext.getCmp('basicsalaryBrwId').getStore().load();
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'basicsalaryStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    if (Ext.get('queryToolbarId') == null) {
                                        menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    }
                                    else {
                                        menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    }
                                    menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '250px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Toolbar', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                cls: 'navToolbar',
                                                                height: '46px',
                                                                items: [{
                                                                    xtype: 'searchfield',
                                                                    itemId: 'list_search_box',
                                                                    id: 'list_search_box',
                                                                    height: '44px',
                                                                    padding: '0 0 0 0',
                                                                    width: '100%'
                                                                }]
                                                            });
                                                            Ext.getCmp('basicsalaryBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('basicsalaryBrwId').getStore().clearFilter();
                                                        Ext.getCmp('basicsalaryBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('basicsalaryBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('basicsalaryBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('basicsalaryBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'basicsalaryBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

            salarydetailsBrw: {
                itemsingletap: function (list, index, target, record, e) {
                    if (Ext.Viewport.SalaryDetailsView == undefined) {
                        Ext.Viewport.SalaryDetailsView = Ext.create('ChuangCai.view.salary.SalaryDetailsView');
                        //Ext.Viewport.add(Ext.Viewport.SalaryDetailsView);
                    }
                    Ext.Viewport.SalaryDetailsView.setRecord(record);
                    this.redirectTo('redirec/salarydetailsView');
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    //多选点确定，调用此方法
                    console.log(ids);
                },
                activate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                    Ext.getCmp('salarydetailsBrwId').getStore().load();
                    CSS.addStyleSheet('news');
                    var bar = obj.getNavigationBar();
                    //处理查询后点击某一条查看明细，返回后，需要保留原来的查询内容
                    if (Ext.get('list_search_box') !== null) {
                        this.onSearchKeyUp(Ext.getCmp('list_search_box'));
                    }
                    if (Ext.getCmp('moreId') == null) {
                        bar.add({
                            id: 'moreId',
                            xtype: 'img',
                            right: 5,
                            centered: true,
                            src: 'resources/images/system/more.png',
                            width: 45,
                            height: 45,
                            align: 'right',
                            ui: 'decline',
                            listeners: {
                                tap: function () {
                                    var menuStore = Ext.create('Ext.data.Store', {
                                        id: 'salarydetailsStoreId',
                                        fields: ['name', 'icon', 'needsIcon'],
                                    });
                                    if (Ext.get('queryToolbarId') == null) {
                                        menuStore.add({ "id": "queryId", "name": "查询", "icon": 'password', "needsIcon": true });
                                    }
                                    else {
                                        menuStore.add({ "id": "cancelQueryId", "name": "取消查询", "icon": 'password', "needsIcon": true });
                                    }
                                    menuStore.add({ "id": "refreshId", "name": "刷新", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "multiselectId", "name": "多选", "icon": 'question', "needsIcon": true });
                                    menuStore.add({ "id": "sortId", "name": "排序", "icon": 'sound', "needsIcon": true });
                                    menuStore.add({ "id": "favoriteId", "name": "收藏", "icon": 'question', "needsIcon": true });
                                    Ext.create('Ext.dataview.List', {
                                        centered: true,
                                        modal: {
                                            style: 'opacity: 0'
                                        },
                                        hideOnMaskTap: true,
                                        width: '60%',
                                        height: '250px',
                                        //数据源
                                        itemTpl: '<tpl if="needsIcon"><img width="26" height="26" src="resources/images/setup/{icon}.png" align="absmiddle" />&nbsp;&nbsp;</tpl>{name}',
                                        store: menuStore,
                                        listeners: {
                                            itemsingletap: function (list, index, target, record, e) {
                                                var id = record.data.id;
                                                switch (id) {
                                                    case 'queryId':
                                                        if (record.data.name == "查询") {
                                                            record.data.name = "取消查询";
                                                        }
                                                        if (Ext.get('queryToolbarId') == null) {
                                                            var queryToolbar = Ext.create('Ext.Toolbar', {
                                                                docked: 'top',
                                                                id: 'queryToolbarId',
                                                                cls: 'navToolbar',
                                                                height: '46px',
                                                                items: [{
                                                                    xtype: 'searchfield',
                                                                    itemId: 'list_search_box',
                                                                    id: 'list_search_box',
                                                                    height: '44px',
                                                                    padding: '0 0 0 0',
                                                                    width: '100%'
                                                                }]
                                                            });
                                                            Ext.getCmp('salarydetailsBrwId').add([queryToolbar]);
                                                        }
                                                        break;
                                                    case 'cancelQueryId':
                                                        Ext.getCmp('salarydetailsBrwId').getStore().clearFilter();
                                                        Ext.getCmp('salarydetailsBrwId').remove(Ext.getCmp('queryToolbarId'));
                                                        break;
                                                    case 'refreshId':
                                                        Ext.getCmp('salarydetailsBrwId').getStore().load();
                                                        break;
                                                    case 'multiselectId':
                                                        Ext.getCmp('salarydetailsBrwId').beginSimple("", "", "edit");
                                                        break;
                                                    default:
                                                        null;
                                                }
                                                list.hide();
                                            }
                                        }
                                    }).showBy(Ext.getCmp('moreId'));
                                }
                            }
                        });
                    };
                },
                deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                    //清空查询条件
                    Ext.getCmp('salarydetailsBrwId').getStore().clearFilter();
                    CSS.cleanStyleSheets();
                    var bar = obj.getNavigationBar();
                    //bar.remove(Ext.getCmp('edit'));
                    bar.remove(Ext.getCmp('moreId'));
                }
            },
            'salarydetailsBrw searchfield[itemId=list_search_box]': {
                clearicontap: 'onSearchClearIconTap',
                keyup: 'onSearchKeyUp'
            },

        }
    }

});