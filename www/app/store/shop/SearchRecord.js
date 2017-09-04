Ext.define('ChuangCai.store.shop.SearchRecord', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.SearchRecord',
        storeId: 'SearchRecord',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetSearchRecord.ashx?userId=' + util.getUserId(),
            pageParam: 'currentPage', 
            limitParam: 'pageSize',
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        }
    }
});