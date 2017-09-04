Ext.define('ChuangCai.store.shop.Category', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.Category',
        storeId: 'categorySelect',
        autoLoad: true,
        pageSize: 100,
        //proxy: {
        //    type: 'ajax',
        //    url: util.getMobileSite() + 'Shop/GetCategory.ashx',
        //    pageParam: 'currentPage', //当前页码  
        //    limitParam: 'pageSize',//每页条数
        //    reader: {
        //        type: "json",
        //        rootProperty: 'result',
        //        totalProperty: 'totalCounts'
        //    }
        //},
        proxy: {
            type: "ajax",
            url: util.getMobileSite() + 'Shop/GetCategory.ashx',
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