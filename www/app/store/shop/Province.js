Ext.define('ChuangCai.store.shop.Province', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.Province',
        storeId: 'provinceSelect',
        autoLoad: false,
        pageSize: 100,
        proxy: {
            type: 'ajax',
            url: (tempParams == null || tempParams == undefined) ?
                util.getMobileSite() + 'Shop/GetProvince.ashx?' :
                util.getMobileSite() + 'Shop/GetProvince.ashx?provinceId=' + tempParams.provinceId,
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