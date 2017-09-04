Ext.define('ChuangCai.store.shop.ProductCategory', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.ProductCategory',
        storeId: 'productCategory',
        autoLoad: true,
        pageSize: 100,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetProductCategory.ashx',
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