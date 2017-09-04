//公司新闻
Ext.define('ChuangCai.model.supervise.BorrowRecord', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'person_name',
            type: 'string'
        },
        {
            //概述
            name: 'person_cardno',
            type: 'string'
        },
        {
            //发布日期
            name: 'borrow_return_datetime',
            type: 'string'
        }]
    }
});