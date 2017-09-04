Ext.define('ChuangCai.store.shop.CMSContent', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.CMSContent',
        storeId: 'CMSStore',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            //url: util.getMobileSite() + 'Shop/GetCMSContent.ashx',
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