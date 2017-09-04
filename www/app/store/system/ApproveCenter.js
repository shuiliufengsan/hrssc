Ext.define('ChuangCai.store.system.ApproveCenter', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.ApproveCenter',
        storeId: 'approvecenter',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'SystemManage/GetApproveCenterBrw.ashx',
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