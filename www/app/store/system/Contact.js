Ext.define('ChuangCai.store.system.Contact', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.Contact',
        storeId: 'contact',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
           
            url: util.getMobileSite() + 'SystemManage/GetContactBrw.ashx',
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        grouper: {
            groupFn: function (record) {
                return record.data.employee_name.substring(0, 1);
            }
        },
        listeners: {
            load: function (obj, records, successful, operation, eOpts) {
            }
        }
    }
});