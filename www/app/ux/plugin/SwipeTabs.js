/*
*TabPanel的Carousel功能插件
*/
Ext.define('ux.plugin.SwipeTabs', {
    alias: 'plugin.swipetabs',
    xtype: 'swipetabs',
    config: {
        cmp: null,
        //是否循环滚动
        allowOverflow: false,
        animation: {
            duration: 300,
            easing: 'ease-out',
            type: 'slide'
        }
    },
    constructor: function (config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    init: function (cmp) {
        this.setCmp(cmp);
    },
    updateCmp: function (newCmp, oldCmp) {
        if (oldCmp) {
            oldCmp.element.un('swipe', this.onSwipe);
        }
        if (newCmp) {
            newCmp.element.on('swipe', this.onSwipe, this);
        }
    },
    onSwipe: function (e) {
        var cmp = this.getCmp(),
            allowOverflow = this.getAllowOverflow(),
            animation = this.getAnimation(), //获取切换动画效果
            direction = e.direction, //滑动方向
            activeItem = cmp.getActiveItem(), //当前选中项
            innerItems = cmp.getInnerItems(), //所有项
            numIdx = innerItems.length - 1, //最大索引
            idx = Ext.Array.indexOf(innerItems, activeItem), //当前选中项索引
            newIdx = idx + (direction === 'left' ? 1 : -1), //目标索引
            newItem;
        //处理目标索引，避免出错
        if (newIdx < 0) {
            if (allowOverflow) {
                newItem = innerItems[numIdx];
                newIdx = numIdx;
            }
        } else if (newIdx > numIdx) {
            if (allowOverflow) {
                newItem = innerItems[0];
                newIdx = 0;
            }
        } else {
            newItem = innerItems[newIdx];
        }
        if (newItem) {
            animation = Ext.apply({}, {
                direction: direction
            }, animation);
            //切换
            cmp.animateActiveItem(newItem, animation);
            //设置导航滚动
            var mun = cmp.getMoveNum();
            if (mun && mun > 0) {
                var scr = cmp.getTabBar().getScrollable().getScroller();
                scr.scrollTo(newIdx * mun, 0);
            }
        }
    }
});