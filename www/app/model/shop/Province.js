//产品类型
Ext.define('ChuangCai.model.shop.Province', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //代码
            name: 'province_code',
            type: 'string'
        },
        {
            //名称
            name: 'province_name_c',
            type: 'string'
        }]
    }
});