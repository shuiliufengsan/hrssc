//公告
Ext.define('ChuangCai.model.system.Notice', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'title',
            type: 'string'
        },
        {
            //概述
            name: 'content',
            type: 'string'
        },
        {
            //发布日期
            name: 'begin_date',
            type: 'string'
        }]
    }
});