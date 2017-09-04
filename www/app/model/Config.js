//配置信息
Ext.define('ChuangCai.model.Config', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }],
        proxy: {
            type: 'localstorage',
            id: 'config'
        }
    }
});