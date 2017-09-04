Ext.define('ChuangCai.store.system.Message', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.Message',
        storeId: 'message',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'SystemManage/GetMessageBrw.ashx?userId=' + util.getUserId(),
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