Ext.define('ChuangCai.store.supervise.NearbyStation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.NearbyStation',
        storeId: 'nearbyStation',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Supervise/GetStationBrw.ashx',
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