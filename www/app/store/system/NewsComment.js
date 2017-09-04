Ext.define('ChuangCai.store.system.NewsComment', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.NewsComment',
        storeId: 'newsComment',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'SystemManage/GetNewsCommentBrw.ashx',
            //params: {
            //    newsId: aRecord.data.id
            //},
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