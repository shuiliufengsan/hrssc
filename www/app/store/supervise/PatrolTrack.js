Ext.define('ChuangCai.store.supervise.PatrolTrack', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.PatrolTrack',
        storeId: 'patrolTrack',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Supervise/GetPatrolTrackBrw.ashx',
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