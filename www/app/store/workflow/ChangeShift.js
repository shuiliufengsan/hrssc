Ext.define('ChuangCai.store.workflow.ChangeShift', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.workflow.ChangeShift',
        storeId: 'changeShift',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',

            url: util.getMobileSite() + 'Workflow/GetChangeShiftBrw.ashx',
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