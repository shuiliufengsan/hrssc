Ext.define('ChuangCai.store.park.MyOrder', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.park.MyCollect',
        storeId: 'myOrder',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Park/GetMyOrder.ashx',//?userPhone=' + util.getUserCode() + '&qqname=' + decodeURI(getCookie("username")),
            pageParam: 'currentPage', //当前页码  
            limitParam: 'pageSize',//每页条数
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            }
        }
    }
});