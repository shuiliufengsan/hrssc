//个人消息
Ext.define('ChuangCai.model.system.Message', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'message_title',
            type: 'string'
        },
        {
            //概述
            name: 'message_text',
            type: 'string'
        },
        {
            //发布日期
            name: 'send_time',
            type: 'string'
        }]
    }
});