/*
*为TabPanel加上向左向右按钮
*选项较多时可以滚动
*/
Ext.define('ux.PageTab', {
    extend: 'Ext.TabPanel',
    xtype: 'pageTab',
    config: {
        cls: 'pageTab',
        //每次移动的距离
        moveNum: 41,
        //是否循环滚动
        allowOverflow: false,
        //向右翻页按钮
        rightBtn: {
            iconMask: true,
            iconCls: 'tabRight',
            name: 'move',
            action: 1,
            docked: 'right'
        },
        //向左翻页按钮
        leftBtn: {
            iconCls: 'tabLeft',
            iconMask: true,
            action: -1,
            name: 'move',
            docked: 'left'
        },
        //设置横向滚动条
        tabBar: {
            cls: 'pageTabBar',
            scrollable: {
                direction: 'horizontal',
                //隐藏滚动条样式
                indicators: false
            }
        }
    },
    //创建右翻页按钮
    applyRightBtn: function (config) {
        return Ext.factory(config, Ext.Button, this.getRightBtn());
    },
    //更新右翻页按钮
    updateRightBtn: function (newRightBtn, oldRightBtn) {
        this.updateMoveBtn(newRightBtn, oldRightBtn);
    },
    //创建左翻页按钮
    applyLeftBtn: function (config) {
        return Ext.factory(config, Ext.Button, this.getLeftBtn());
    },
    //更新左翻页按钮
    updateLeftBtn: function (newLeftBtn, oldLeftBtn) {
        this.updateMoveBtn(newLeftBtn, oldLeftBtn);
    },
    //更新翻页按钮
    updateMoveBtn: function (newMoveBtn, oldMoveBtn) {
        if (oldMoveBtn) {
            this.getTabBar().remove(oldMoveBtn);
        }
        if (newMoveBtn) {
            this.getTabBar().add(newMoveBtn);
            newMoveBtn.on({
                scope: this,
                tap: this.onTabMove
            });
        }
    },
    //点击翻页按钮执行
    onTabMove: function (btn) {
        //获取当前项
        var activeItem = this.getActiveItem(),
        //是否循环滚动
        allowOverflow = this.getAllowOverflow(),
        //获取所有项
        innerItems = this.getInnerItems(),
        //获取最大索引
        numIdx = innerItems.length - 1,
        //获取当前选中项索引
        idx = Ext.Array.indexOf(innerItems, activeItem),
        //获取点击按钮后索引
        newIdx = idx + btn.config.action;
        if (newIdx < 0) {
            if (!allowOverflow) return;
            newIdx = numIdx;
        } else if (newIdx > numIdx) {
            if (!allowOverflow) return;
            newIdx = 0;
        }
        //选中新项
        this.setActiveItem(newIdx);
        this.setScroll(newIdx);
    },
    //选择项
    selectView: function (itemId) {
        //获取所有项
        var me = this, innerItems = me.getInnerItems(), i, ln, item;
        for (i = 0, ln = innerItems.length; i < ln; i++) {
            item = innerItems[i];
            if (item.getItemId() == itemId) {
                me.setActiveItem(item);
                me.setScroll(i);
                break;
            }
        }
    },
    //设置滚动条
    setScroll: function (newIdx) {
        //设置新的滚动位置
        var mun = this.getMoveNum();
        if (mun && mun > 0) {
            var scr = this.getTabBar().getScrollable().getScroller();
            scr.scrollTo(newIdx * mun, 0);
        }
    }
});