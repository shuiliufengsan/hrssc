Ext.define('ChuangCai.model.shop.CMSContent', {
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
            name: 'description',
            type: 'string'
        }]
    }
});