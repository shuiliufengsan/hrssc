Ext.define('ChuangCai.store.park.ParkAdvInfo', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.park.ParkAdvInfo',
        storeId: 'parkAdvInfo',
        autoLoad: false,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            url: util.getMobileSite() + 'Park/GetParkThemeBrw.ashx',
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