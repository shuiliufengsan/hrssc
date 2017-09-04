Ext.define('ChuangCai.view.layout.Squared', {
    alternateClassName: 'layoutSquared',
    extend: 'Ext.Container',
    xtype: 'layoutSquared',
    config: {
        title: '九宫格',
        cls: 'home',
        layout: 'vbox',
        defaults: {
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'center'
            },
            defaults: {
                flex: 1
            }
        },
        items: [{
            items: [{
                xtype: 'button',
                text: '按钮1',
                iconAlign: 'top',
                 iconCls: 'squared orangeYellow'
            },
            {
                xtype: 'button',
                text: '按钮2',
                iconAlign: 'top',
                iconCls: 'organize orange'
            },
            {
                xtype: 'button',
                text: '按钮3',
                iconAlign: 'top',
                iconCls: 'add roseRed'
            }]
        },
        {
            items: [{
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'refresh lightBlue',
                text: '按钮4'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'search green',
                text: '按钮5'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'star yellow',
                text: '按钮6'
            }]
        },
        {
            items: [{
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'trash paleYellow',
                text: '按钮7'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'maps smBlue',
                text: '按钮8'
            },
            {
                xtype: 'button',
                iconAlign: 'top',
                iconCls: 'action',
                text: '按钮9'
            }]
        }]
    }
});