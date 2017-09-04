Ext.define('ChuangCai.view.shop.CMSContentView', {
    alternateClassName: 'cMSContentView',
    extend: 'Ext.Panel',
    xtype: 'cMSContentView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        title: '内容',
        style: "background-color: #ffffff;",
        plugins: 'conHref',
        items: [{
            xtype: "panel",
            width: document.body.clientWidth - 20,
            style:"margin-left:13px",
            items: [{
                xtype: "panel",
                id: 'cMSContentViewId',
                height: document.body.clientHeight,
                style: "background-color: #ffffff; padding-top:5px;",
            }]
        }]
    }
});