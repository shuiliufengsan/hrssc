//公司新闻
Ext.define('ChuangCai.model.system.Video', {
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
            name: 'summary',
            type: 'string'
        },
        {
            //发布日期
            name: 'publish_date',
            type: 'string'
        },
        {
            name: 'video_image',
            type: 'string'
        },
        {
            name: 'video_path',
            type: 'string'
        },
        {
            name: 'type',
            type: 'string'
        }]
    }
});