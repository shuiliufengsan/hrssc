Ext.define('ChuangCai.store.shop.ShopHomeNews', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.ShopHomeNews',
        storeId: 'ShopHomeNews',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetShopHomeNews.ashx',
            pageParam: 'currentPage',
            limitParam: 'pageSize',
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        }
    }
});