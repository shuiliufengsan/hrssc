Ext.define('ChuangCai.view.panel.Img', {
    alternateClassName: 'panelImg',
    extend: 'Ext.Container',
    xtype: 'panelImg',
    config: {
        title: '查看图片',
        scrollable: {
            direction: 'auto',
            directionLock: true
        },
        tpl: '<img src="{img}" style="margin: 10px">'
    }
});