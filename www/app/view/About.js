Ext.define('ChuangCai.view.About', {
    alternateClassName: 'about',
    extend: 'Ext.Container',
    xtype: 'about',
    config: {
        title: util.getFace('about'), //'关于',
        id:'abc',
        cls: 'info',
        otherMenu: 'bottomBar',
        html: 'version',
        clear: 0//清除后退按钮
    }
});