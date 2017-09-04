Ext.define('ChuangCai.store.UsedList', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.Used',
        storeId: 'usedList',
        autoLoad: true,
        pageSize: 7,
        proxy: {
            type: 'ajax',
            reader: {
                type: "json",
                rootProperty: 'result',
                totalProperty: 'totalCounts'
            },
            api: {
                create: '/controller/new',
                //read: config.used.read
            }
        }
    }
});