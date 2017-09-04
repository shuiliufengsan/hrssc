Ext.define('ChuangCai.model.park.ParkAdvInfo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        }, {
            //停车专题封面
            name: 'pic',
            type: 'string'
        }, {
            //停车专题标题
            name: 'title',
            type: 'string'
        }, {
            //专题简介
            name: 'summary',
            type: 'string'
        }, {
            //发布日期
            name: 'publish_date',
            type: 'string'
        }]
    }
});