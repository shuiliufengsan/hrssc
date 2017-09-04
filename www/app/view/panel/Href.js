Ext.define('ChuangCai.view.panel.Href', {
    alternateClassName: 'panelHref',
    extend: 'Ext.Container',
    xtype: 'panelHref',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'panelHref',
        title: '内容包含超链接',
        plugins: 'conHref',
        scrollable: null,
        tpl: '{content}',
        html: '<a href="http://www.google.com.hk/">谷歌</a><br/><br/>有时候内容直接从后台获取，有可能包含超链接，打包成应用之后，点击会造成不好的后果，这样做能够用外部浏览器打开。需要Cordova支持'
    }
});