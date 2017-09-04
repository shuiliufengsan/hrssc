//博客
Ext.define('ChuangCai.model.Used', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //标题
            name: 'id',
            type: 'int'
        }, {
            //标题
            name: 'name',
            type: 'string'
        }, {
            //内容
            name: 'content',
            type: 'string'
        }],
        proxy: {
            type: 'ajax',
            api: {
                //update: config.used.update
            },
            reader: {
                successProperty: 'd.success' 
            }
        }
    }
});