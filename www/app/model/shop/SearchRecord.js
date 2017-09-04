//个人搜索记录
Ext.define('ChuangCai.model.shop.SearchRecord', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }, {       
            name: 'search_keyword',
            type: 'string'
        }]
    }
});