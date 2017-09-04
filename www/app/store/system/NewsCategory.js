Ext.define('ChuangCai.store.system.NewsCategory', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.system.NewsCategory',
        storeId: 'newsCategroy',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'SystemManage/GetLov.ashx?lovCode=TaskStatus&companyId='+util.getCompanyId(),
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

//Ext.define('ChuangCai.store.system.NewsCategory', {
//    extend: 'Ext.data.Store',
//    config: {
//        model: 'ChuangCai.model.system.NewsCategory',
//        storeId: 'newsCategroy',
//        remoteSort: false,
//        data: [{ id: "1", title: '全部新闻', value: 'all' },
//               { id: "2", title: '当日新闻', value: 'day' },
//               { id: "3", title: '本周新闻', value: 'week' },
//               { id: "4", title: '本月新闻', value: 'month' }]
//    }
//});