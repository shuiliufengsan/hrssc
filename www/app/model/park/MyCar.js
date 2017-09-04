Ext.define('ChuangCai.model.park.MyCar', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //car_id
            name: 'carid',
            type: 'string'
        }, {
            //备注
            name: 'remark',
            type: 'string'
        }]
    }
});