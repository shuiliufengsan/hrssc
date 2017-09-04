//类型
Ext.define('ChuangCai.model.park.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //类型名称
            name: 'name',
            type: 'string'
        }]
    }
});