Ext.define('ChuangCai.store.shop.TradeTest', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.tradeTest',
        storeId: 'tradeTest',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetTradeTest.ashx?userId=' + util.getUserId(),
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        }
    }
});