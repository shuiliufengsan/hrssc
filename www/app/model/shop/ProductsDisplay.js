//公司新闻
Ext.define('ChuangCai.model.shop.ProductsDisplay', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //产品id
            name: 'id',
            type: 'int'
        }, {
            //产品名称
            name: 'productname',
            type: 'string'
        }, {
            //所在地
            name: 'regionid',
            type: 'string'
        }, {
            //产品上架日期
            name: 'addeddate',
            type: 'string'
        }, {
            //当前价
            name: 'current_price',
            type: 'string'
        }, {
            //起拍价
            name: 'startprice',
            type: 'string'
        }, {
            //评估价
            name: 'evaluateprice',
            type: 'string'
        }, {
            //保证金
            name: 'deposit',
            type: 'string'
        }, {
            //加价幅度
            name: 'increaseprice',
            type: 'string'
        }, {
            //访问量
            name: 'visticounts',
            type: 'string'
        }, {
            //图片url
            name: 'imageurl',
            type: 'string'
        }, {
            //评估价
            name: 'delete_flag',
            type: 'string'
        }]
    }
});