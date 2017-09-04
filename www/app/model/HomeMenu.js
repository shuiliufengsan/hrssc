//用户信息
Ext.define('ChuangCai.model.HomeMenu', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'string'
        },
        {
            name: 'xtype',
            type: 'string'
        },
        {
            name: 'width',
            type: 'string'
        },
        {
            name: 'style',
            type: 'string'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'iconAlign',
            type: 'string'
        },
        {
            name: 'iconCls',
            type: 'string'
        },
        {
            name: 'action',
            type: 'string'
        },
        {
            name: 'redirect',
            type: 'string'
        }],
        //proxy: {
        //    type: 'localstorage',
        //    id: 'homemenu'
        //}
    }
});