Ext.define('ChuangCai.view.panel.WeiBo', {
    alternateClassName: 'panelWeiBo',
    extend: 'Ext.Container',
    xtype: 'panelWeiBo',
    requires: ['ux.plugin.ConTpl'],
    config: {
        cls: 'info',
        title: '登录分享微博',
        otherMenu: 'panelTelBar',
        plugins: 'conTpl',
        html: [
        '<div class="tc">点击按钮分享微博</div>',
        '<div class="x-button-normal x-button x-iconalign-center x-layout-box-item x-stretched btn" fire="weiBo" >分享微博</div>'
        ].join('')
    }
});