Ext.define('ChuangCai.model.shop.ShopHomeNews', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'string'
        }, {       
            name: 'title',
            type: 'string'
        }, {
            name: 'publish_date',
            type: 'string'
        }]
    }
});