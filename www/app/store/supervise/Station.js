Ext.define('ChuangCai.store.supervise.Station', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.Station',
        storeId: 'station',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: (tempParams == null || tempParams == undefined) ? util.getMobileSite() + 'Supervise/GetStationBrw.ashx?' : util.getMobileSite() + 'Supervise/GetStationBrw.ashx?provinceId=' + tempParams.provinceId,
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