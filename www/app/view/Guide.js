//欢迎页面引导页
Ext.define('ChuangCai.view.Guide', {
    extend: 'Ext.Container',
    requires: ['Ext.util.DelayedTask', 'ux.plugin.ConTpl'],
    xtype: 'guide',
    config: {
        cls: 'guide',
        plugins: [{
            xtype: 'conTpl',
            delegate: 'div.guideBtn',
            scrollable: null
        }],
        html: '<div class="bgImg bv"><div class="text bone"></div><div class="bthree"><div class="guideBtn" fire="guideBtn"></div></div></div>'
        //html: '<div class="bgImg bv"><div class="text bone"></div><div class="bthree"><div class="guideBtn" fire="guideBtn"><div class="guideIco" ></div></div></div></div>'
    },
    initialize: function () {
        var me = this;
        //监听当前项激活与取消激活事件
        me.on({
            scope: this,
            activate: 'onActivate',
            deactivate: 'onDeactivate'
        });
        //设置延迟执行事件，等同于js的setTimeout
        me.delayhide = Ext.create('Ext.util.DelayedTask',
        function () {
            me.fireEvent('showMain');
        });
    },
    //当前项被激活时，3秒后进入首页
    onActivate: function () {
        console.log('activate');
        this.delayhide.delay(500);
    },
    //点击进入首页
    doguideBtn: function () {
        this.delayhide.delay(0);
    },
    //当前项取消激活状态，取消延迟事件
    onDeactivate: function () {
        this.delayhide.cancel();
        console.log('deactivate');
    }
});