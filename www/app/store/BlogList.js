Ext.define('ChuangCai.store.BlogList', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.reader.Xml'],
    config: {
        model: 'ChuangCai.model.Blog',
        storeId: 'blogList',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            //url: config.cnblogs,
            limitParam: false,
            pageParam: false,
            startParam: false,
            noCache: false,
            reader: {
                type: 'xml',
                record: 'entry',
                rootProperty: 'feed'
            }
        }
    }
});