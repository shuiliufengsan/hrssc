//问卷
Ext.define('ChuangCai.model.Quiz', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        },
        {
            //图片链接
            name: 'log',
            type: 'string'
        },
        {
            //标题
            name: 'title',
            type: 'string'
        },
        {
            //积分
            name: 'integral',
            type: 'int'
        },
        {
            //中奖人数
            name: 'winning',
            type: 'int'
        },
        {
            //参与人数
            name: 'count',
            type: 'int'
        },
        {
            //题目总数
            name: 'qCount',
            type: 'int'
        },
        {
            //发布者
            name: 'post',
            type: 'string'
        }]
    }
});