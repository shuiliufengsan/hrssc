Ext.define('ChuangCai.view.panel.TelBar', {
    alternateClassName: 'panelTelBar',
    extend: 'Ext.Toolbar',
    xtype: 'panelTelBar',
    requires: ['ux.plugin.ConTpl'],
    config: {
        cls: 'navToolbar telBar',
        docked: 'bottom',
        plugins: 'conTpl',
        tpl: new Ext.XTemplate(
        '<tpl if="user"><div class="bh">',
            '<div class="bv b1 pad"><div class="black">{fullname}</div><div class="gray">{telephone}</div></div>',
            '<div class="x-button-normal x-button x-iconalign-top x-layout-box-item x-flexed x-stretched w3" fire="phone" do="tel"><span class="x-button-icon x-shown tel blue"></span><span class="x-button-label">打电话&nbsp;&nbsp;&nbsp;&nbsp;</span></div>',
            '<div class="x-button-normal x-button x-iconalign-top x-layout-box-item x-flexed x-stretched w3" fire="phone" do="sms"><span class="x-button-icon x-shown mes blue"></span><span class="x-button-label">发短信&nbsp;&nbsp;&nbsp;&nbsp;</span></div>',
        '</div></tpl>',
        '<tpl if="!user">',
            '<div class="telBtn"><div class="x-unsized x-button x-button-decline" fire="login"></span><span class="x-button-label">登录查看联系方式</span></div></div>', '</tpl>')
    },
    //初始化
    initialize: function () {
        this.setData({
            telephone: 10000,
            fullname: '中国电信',
            user: config.user
        });
        //添加监听
        this.on({
            scope: this,
            show: 'onShow'
        });
    },
    //检查登录状态
    onShow: function () {
        var data = this.getData();
        data.user = config.user;
        this.setData(data);
    }
});