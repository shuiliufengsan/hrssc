Ext.define('ChuangCai.model.supervise.NearbyStation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //站点编号
            name: 'station_code',
            type: 'string'
        },
        {
            //站点名称
            name: 'station_name',
            type: 'string'
        },
        {
            //站点地址
            name: 'station_address',
            type: 'string'
        },
        {
            //温度
            name: 'temprature',
            type: 'string'
        },
        {
            //电压
            name: 'voltage',
            type: 'string'
        },
        {
            //径度
            name: 'longitude',
            type: 'string'
        },
        {
            //纬度
            name: 'latitude',
            type: 'string'
        },
        {
            //自行车数
            name: 'bicycle_count',
            type: 'string'
        },
        {
            //总锁柱数
            name: 'lock_count',
            type: 'string'
        },
        {
            //空锁柱数
            name: 'lock_empty_count',
            type: 'string'
        },
        {
            //坏锁柱数
            name: 'lock_bad_count',
            type: 'string'
        },
        {
            //在线状态
            name: 'station_status',
            type: 'string'
        }]
    }
});