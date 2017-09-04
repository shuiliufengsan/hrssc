/**
*！
*下拉刷新
* https://github.com/scaljeri/pull-refresh-panel
*2012年，Lucas Calje 版权所有
*gnu公共许可证<http://www.gnu.org/licenses/>。
*日期：星期一6月4日12时46分34秒20120100
*该插件添加了下拉刷新功能。
*/
Ext.define('ux.plugin.PanelRefreshFn', {
    extend: 'ux.plugin.RefreshFn',
    alias: 'plugin.panelRefreshFn',
    xtype: 'panelRefreshFn',
    config: {
        refreshFn: null
    },
    init: function (list) {
        if ((this.isList = list.getStore && list.getStore() ? true : false) == true) { // 如果是list直接返回list下拉刷新插件
            return this.callParent(arguments);
        }
        this.setList(list);

        var me = this,
        pullTpl = me.getPullTpl(),
        element = me.element;
        me.scrollable = list.getScrollable().getScroller();

        if (!me.scrollable) {
            return;
        }

        me.lastUpdated = new Date();

        list.add(me);

        pullTpl.overwrite(element, {
            message: me.getPullRefreshText(),
            lastUpdated: me.lastUpdated
        },
        true);

        me.loadingElement = element.getFirstChild();
        me.messageEl = element.down('.x-list-pullrefresh-message');
        me.updatedEl = element.down('.x-list-pullrefresh-updated');
        window.x = me.updatedEl;

        me.maxScroller = me.scrollable.getMaxPosition();

        me.scrollable.on({
            maxpositionchange: me.setMaxScroller,
            scroll: me.onScrollChange,
            scope: me
        });
    },
    loadStore: function () {
        if (this.isList == true) {
            return this.callParent(arguments);
        }
        var me = this;
        me.setViewState('loading');
        me.isReleased = false;
        me.getRefreshFn().call(me, me);
    },
    refreshReady: function () {
        this.scrollable.minPosition.y = 0;
        this.scrollable.scrollTo(null, 0, true);
        this.resetRefreshState();
    },
    onBounceTop: function (y) {
        var me = this,
        pullHeight = me.pullHeight,
        list = me.getList(),
        scroller = list.getScrollable().getScroller();
        if (!me.isReleased) {
            if (!pullHeight) {
                me.onPainted();
                pullHeight = me.pullHeight;
            }
            if (!me.isRefreshing && -y >= pullHeight + 10) {
                me.isRefreshing = true;
                me.setViewState('release');
                scroller.getContainer().onBefore({
                    dragend: 'onScrollerDragEnd',
                    single: true,
                    scope: me
                });
            } else if (me.isRefreshing && -y < pullHeight + 10) {
                me.isRefreshing = false;
                me.setViewState('pull');
            }
        }
        if (this.isList == true) me.getTranslatable().translate(0, -y);
    }
});