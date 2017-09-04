Ext.define("ChuangCai.view.user.AccountBound", {
    alternateClassName: 'accountBound',
    extend: 'Ext.form.Panel',
    xtype: 'accountBound',
    requires: ['Ext.field.Toggle', 'Ext.form.FieldSet', 'Ext.field.Password'],
    config: {
        scrollable: null,
        redirect: null,
        items: [{
            xtype: 'fieldset',
            iconCls: 'home',
            defaults: {
                labelWidth: '40%'
            },
            items: [{
                xtype: 'textfield',
                name: 'username',
                locales: {
                    placeHolder: 'accountBound.placeUsername' //'请输入用户名:'
                }
            },
            {
                xtype: 'label',
                docked: 'top',
                cls: 'y-label-top',
                locales: {
                    html: 'accountBound.title' //'登录创采e-HR'
                }
            },
            {
                xtype: 'passwordfield',
                name: 'password',
                locales: {
                    placeHolder: 'accountBound.placePassword' //'请输入密码:'
                }
            },
            {
                xtype: 'button',
                action: 'login',
                locales: {
                    text: 'accountBound.buttonBound' //'登录:'
                },
                ui: 'action'
            }]
        }],
        html: '<div class="remark">提示：<br/>' +
              '1、账号绑定后，可以快速查询信息；<br/>' +
              '2、此处的账号和密码为您登录系统时的账号和密码；</div>'
    }
});