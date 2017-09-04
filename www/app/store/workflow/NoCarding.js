Ext.define('ChuangCai.store.workflow.NoCarding', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.workflow.NoCarding',
        storeId: 'noCarding',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',

            url: util.getMobileSite() + 'Workflow/GetNoCardingBrw.ashx',
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