Ext.define('ChuangCai.store.shop.GoodsType', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.shop.GoodsType',
        storeId: 'GoodsType',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Shop/GetGoodsType.ashx',
       //      url: util.getMobileSite() + 'Shop/GetShopHomeNews.ashx',
            pageParam: 'currentPage',
            limitParam: 'pageSize',
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        },
        listeners: {
            load: function (store, records, successful) {
                if (!successful)
                {
                    //Ext.Msg.alert("shibai"); 
                    console.log("shibai");
                    debugger;
                }
                else
                {// Ext.Msg.alert("chengonga");
                }
            }
        }
    }
});
