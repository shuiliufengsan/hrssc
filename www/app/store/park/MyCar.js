Ext.define('ChuangCai.store.park.MyCar', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.park.MyCar',
        storeId: 'myCar',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',   //userPhone=' + util.getUserId() + '&qqname=' + decodeURI(getCookie("username"))
            url: util.getMobileSite() + 'Park/GetMyCar.ashx',
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