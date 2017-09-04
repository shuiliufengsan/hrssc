Ext.define('ChuangCai.store.system.News', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.News',
        storeId: 'news',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'SystemManage/GetNewsBrw.ashx?userId=' + util.getUserId(),
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