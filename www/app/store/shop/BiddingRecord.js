Ext.define('ChuangCai.store.shop.BiddingRecord', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.BiddingRecord',
        storeId: 'biddingRecord',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetBiddingBrw.ashx',
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        listeners: {
            load: function (obj, records, successful, operation, eOpts) {
            }
        }
    }
});