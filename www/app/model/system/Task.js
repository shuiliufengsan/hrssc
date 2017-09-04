//我的任务
Ext.define('ChuangCai.model.system.Task', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'calendar_title',
            type: 'string'
        },
        {
            //概述
            name: 'content',
            type: 'string'
        },
        {
            //优先级
            name: 'importance_text',
            type: 'string'
        },
        {
            //完成率
            name: 'complete_ratio',
            type: 'string'
        },
        {
            //开始日期
            name: 'start_date',
            type: 'string'
        },
        {
            //结束日期
            name: 'end_date',
            type: 'string'
        },
        {
            //状态
            name: 'status_text',
            type: 'string'
        }]
    }
});