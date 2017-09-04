/**
* 重写下拉刷新插件，以支持refreshFn事件
*/
Ext.define('ux.plugin.RefreshFn', {
    extend: 'Ext.plugin.PullRefresh',
    alias: 'plugin.refreshFn',
    requires: ['Ext.DateExtras'],
    xtype:'refreshFn',
    config: {
        /**
        *@ CFG {功能} refreshFn函数将被调用以刷新列表。
        *如果没有定义，store里的函数将被调用。
        */
        refreshFn: null,
        pullText: '下拉刷新',
        releaseText:'释放立即刷新',
        lastUpdatedText: '上次刷新时间：',
        loadedText:'加载成功',
        loadingText: '加载中...',
        //pullRefreshText: '下拉可以手动刷新',
        //releaseRefreshText: '松开可以刷新',
        lastUpdatedDateFormat: 'Y-m-d H:i:s'
    },

    loadStore: function () {
        var me = this,
        list = me.getList(),
        scroller = list.getScrollable().getScroller();
        me.setViewState('loading');
        me.isReleased = false;
        Ext.defer(function () {
            scroller.on({
                scrollend: function () {
                    if (me.getRefreshFn()) {
                        me.getRefreshFn().call(me, me);
                    } else {
                        me.fetchLatest();
                    }
                    me.resetRefreshState();
                },
                delay: 100,
                single: true,
                scope: me
            });
            scroller.minPosition.y = 0;
            scroller.scrollTo(null, 0, true);
        },
        500, me);
    }
});