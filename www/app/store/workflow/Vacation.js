Ext.define('ChuangCai.store.workflow.Vacation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.workflow.Vacation',
        storeId: 'vacation',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',

            url: util.getMobileSite() + 'Workflow/GetVacationBrw.ashx',
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