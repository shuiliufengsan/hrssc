//公司新闻
Ext.define('ChuangCai.model.system.NewsCategory', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //标题
            name: 'text',
            type: 'string'
        },
        {
            //发布日期
            name: 'value',
            type: 'string'
        }]
    }
});