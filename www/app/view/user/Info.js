Ext.define('ChuangCai.view.user.Info', {
    alternateClassName: 'userInfo',
    extend: 'Ext.Container',
    xtype: 'userInfo',
    requires: ['ux.plugin.ConTpl'],
    config: {
        cls: 'info',
        title: '购物车',
        plugins: 'conTpl',
        otherMenu: 'bottomBar',
        clear: 0,//清除后退按钮
        //tpl: new Ext.XTemplate(
        //'<div class="tc">亲爱的<span class="orange"> {username} </span>欢迎使用本程序</div>',
        //'<div class="x-button-normal x-button x-iconalign-center x-layout-box-item x-stretched" fire="loginOut" >退出登录</div>'
        //)
    }
});