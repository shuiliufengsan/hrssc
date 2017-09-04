Ext.define('ChuangCai.store.shop.OfferRecord', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.OfferRecord',
        storeId: 'offerRecordId',
        autoLoad: false,
        pageSize: 100,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetOfferRecord.ashx',
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        //grouper: {
        //    groupFn: function (record) {
        //        return record.data.title.substring(0,1);
        //    }
        //},
        listeners: {
            load: function (obj, records, successful, operation, eOpts) {
            }
        }
    }
});