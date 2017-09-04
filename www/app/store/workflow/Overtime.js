Ext.define('ChuangCai.store.workflow.Overtime', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.workflow.Overtime',
        storeId: 'overtime',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',

            url: util.getMobileSite() + 'Workflow/GetOvertimeBrw.ashx',
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