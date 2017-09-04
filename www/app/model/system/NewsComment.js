//公司新闻
Ext.define('ChuangCai.model.system.NewsComment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //用户名
            name: 'comment_man',
            type: 'string'
        },
        {
            //评论内容
            name: 'comment_content',
            type: 'string'
        },
        {
            //回复
            name: 'reply_content',
            type: 'string'
        },
        {
            //评论日期
            name: 'comment_datetime',
            type: 'string'
        }]
    }
});