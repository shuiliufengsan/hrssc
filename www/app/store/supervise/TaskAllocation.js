Ext.define('ChuangCai.store.supervise.TaskAllocation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.TaskAllocation',
        storeId: 'taskAlloction',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Supervise/GetPatrolBrw.ashx',
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