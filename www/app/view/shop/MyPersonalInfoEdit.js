Ext.define('ChuangCai.view.shop.MyPersonalInfoEdit', {
    alternateClassName: 'myPersonalInfoEdit',
    extend: "Ext.Panel",
    xtype: "myPersonalInfoEdit",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        id: 'myPersonalInfoEditId',
        title: '编辑',
        plugins: 'conHref',
        style: "background-color: #ffffff",
        items: [{
            xtype: "panel",
            id: "infoName",
            width: (document.body.clientWidth),
            height: 30,
            cls: "addProduct-fieldset-title",
            html: "<p style='font-size:14px'><b>基本信息</b></p>"
        }, {
            xtype: "textfield",
            width: (document.body.clientWidth),
            inputCls: "addProduct-form-input",
            id: "infoValue",
        }, {
            xtype: "panel",
            height: "1px",
            clearIcon:false,
            style: "background-color: #ccc;"
        }]
    }
});