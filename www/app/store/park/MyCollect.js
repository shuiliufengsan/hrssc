Ext.define('ChuangCai.store.park.MyCollect', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.park.MyCollect',
        storeId: 'myCollect',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Park/GetMyCollect.ashx',//?userPhone=' + util.getUserId() + '&qqname=' + decodeURI(getCookie("username")),
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