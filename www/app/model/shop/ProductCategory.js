//产品类型
Ext.define('ChuangCai.model.shop.ProductCategory', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //标题
            name: 'typename',
            type: 'string'
        },
        {
            //发布日期
            name: 'remark',
            type: 'string'
        }]
    }
});