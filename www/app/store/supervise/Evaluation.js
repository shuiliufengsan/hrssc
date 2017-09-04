Ext.define('ChuangCai.store.supervise.Evaluation', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.Evaluation',
        storeId: 'evaluation',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Supervise/GetEvaluationBrw.ashx',
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