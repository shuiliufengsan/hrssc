Ext.define('ChuangCai.store.supervise.BorrowRecord', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.supervise.BorrowRecord',
        storeId: 'borrowRecord',
        autoLoad: true,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Supervise/GetBorrowRecordBrw.ashx',
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        //grouper: {
        //    groupFn: function (record) {
        //        return record.data.title.substring(0,1);
        //    }
        //},
        listeners: {
            load: function (obj, records, successful, operation, eOpts) {
            }
        }
    }
});