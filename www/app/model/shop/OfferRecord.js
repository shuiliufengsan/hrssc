//出价记录
Ext.define('ChuangCai.model.shop.OfferRecord', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        }, {
            //竞买号
            name: 'offer_no',
            type: 'string'
        }, {
            //价格
            name: 'offer_price',
            type: 'string'
        }, {
            //状态
            name: 'offer_status',
            type: 'string'
        }, {
            //出价日期
            name: 'created_date',
            type: 'string'
        }]
    }
});