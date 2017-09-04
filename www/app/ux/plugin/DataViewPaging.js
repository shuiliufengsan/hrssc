Ext.define('Ext.plugin.DataViewPaging', {
    extend: 'Ext.plugin.ListPaging',
    alias: 'plugin.dataviewpaging',

    init: function (list) {
        var scroller = list.getScrollable().getScroller(),
            store = list.getStore();

        this.setList(list);
        this.setScroller(scroller);
        this.bindStore(list.getStore());

        //this.addLoadMoreCmp();

        // The List's Store could change at any time so make sure we are informed when that happens
        list.updateStore = Ext.Function.createInterceptor(list.updateStore, this.bindStore, this);

        if (this.getAutoPaging()) {
            scroller.on({
                scrollend: this.onScrollEnd,
                scope: this
            });
        }
    },
    onStoreBeforeLoad: function (store) {
        this.addLoadMoreCmp();
        if (store.getCount() === 0) {
            this.getLoadMoreCmp().hide();
        }
    }
});