Ext.define('ChuangCai.model.park.MyCollect', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //park_id
            name: 'park_id',
            type: 'string'
        }, {
            //停车场名称
            name: 'park_name',
            type: 'string'
        },
        {
            //停车场图片
            name: 'imgurl',
            type: 'string'
        }, {
            //停车场地址
            name: 'address',
            type: 'string'
        }, {
            //创建日期
            name: 'created_date',
            type: 'string'
        }]
    }
});