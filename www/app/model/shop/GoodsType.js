//产品类型
Ext.define('ChuangCai.model.shop.GoodsType', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //代码
            name: 'typeName',
            type: 'string'
        },
        {
            //名称
            name: 'remark',
            type: 'string'
        }]
    }
});