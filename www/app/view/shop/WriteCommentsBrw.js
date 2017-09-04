Ext.define('ChuangCai.view.shop.WriteCommentsBrw', {
    alternateClassName: 'writeCommentsBrw',
    extend: 'Ext.Panel',
    xtype: 'writeCommentsBrw',
    requires: ['ux.Rating'],
    config: {
        title: '添加点评',
        //cls: 'info',
        scrollable: {
            direction: 'vertical',
            indicators: false
        },
        items: [{
            cls: 'border',
            items: [{
                label: '描述相符',
                xtype: 'fieldRating',
                name: 'miaoShu'
            }, {
                label: '服务态度',
                xtype: 'fieldRating',
                name: 'fuwu'
            }, {
                label: '发货速度',
                xtype: 'fieldRating',
                name: 'fahuo'
            }]
        }, {
            xtype: 'button',
            margin: '10 20 10 20',
            action: 'save',
            text: '评分',
            ui: 'orange'
        }]
    },
    initialize: function () {
        var me = this,
        button = me.down('button');
        button.on({
            tap: 'onSave',
            scope: me
        });
        me.callParent(arguments);
    },
    updateData: function (data) {
        var me = this,
       info = me.down('#info');
        info.setData(data);
    },
    //保存数据
    onSave: function () {
        var me = this;
        if (util.valid(Ext.create('app.model.Rating'), me)) {
            me.fireEvent('save', me, me.getValues());
        }
    }
});