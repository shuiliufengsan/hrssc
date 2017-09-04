Ext.define("ChuangCai.view.user.Login", {
    alternateClassName: 'userLogin',
    extend: 'Ext.form.Panel',
    xtype: 'userLogin',
    requires: ['Ext.field.Toggle', 'Ext.form.FieldSet', 'Ext.field.Password'],
    config: {
        scrollable: null,
        redirect: null,
        style: "background-color: #ffffff",
        items: [{
            xtype: 'fieldset',
            iconCls: 'home',
            defaults: {
                labelWidth: '40%'
            },
            items: [{
                xtype: 'label',
                docked: 'top',
                cls: 'y-label-top',
                locales: {
                    html: 'login.title' //'登录创采e-HR'
                }
            }, {
                xtype: "panel",
                layout: "hbox",
                style: "background-color: #ffffff;border-bottom: 1px solid #ddd;",
                items: [{
                    xtype: "panel",
                    width: 40,
                    id: "userNameIcon",
                    //style: "text-align:center",
                    html: "<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_user_grey_icon.png'/>"
                }, {
                    xtype: 'textfield',
                    name: 'username',
                    id: "userNameValue",
                    style: "background-color: #ffffff;",
                    width: document.body.clientWidth - 55,
                    clearIcon: false,
                    locales: {
                        placeHolder: 'login.placeUsername' //'请输入用户名:'
                    },
                    listeners: {
                        keyup: function (newValue, oldValue, eOpts) {
                            if (Ext.getCmp("userNameValue").getValue() != "") {
                                Ext.getCmp("userNameIcon").setHtml("<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_user_icon.png'/>");
                            }
                            else {
                                Ext.getCmp("userNameIcon").setHtml("<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_user_grey_icon.png'/>");
                            }
                        }
                    }
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                style: "background-color: #ffffff;border-bottom: 1px solid #ddd;",
                items: [{
                    xtype: "panel",
                    width: 40,
                    id: "passwordIcon",
                    //style: "text-align:center",
                    html: "<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_password_grey_icon.png'/>"
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    id: "passwordValue",
                    width: document.body.clientWidth - 55,
                    clearIcon: false,
                    locales: {
                        placeHolder: 'login.placePassword' //'请输入密码:'
                    },
                    listeners: {
                        keyup: function (newValue, oldValue, eOpts) {
                            if (Ext.getCmp("passwordValue").getValue() != "") {
                                Ext.getCmp("passwordIcon").setHtml("<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_password_icon.png'/>");
                            }
                            else {
                                Ext.getCmp("passwordIcon").setHtml("<img style='width:25px;height:25px;margin-left: 7.5px; margin-top: 7.5px; ' src='resources/images/system/login_password_grey_icon.png'/>");
                            }
                        }
                    }
                }]
            }, {
                xtype: 'togglefield',
                locales: {
                    label: 'login.labelRememberMe' //'记住我:'
                },
                labelWidth: '60%',
                name: 'keepUser',
                value: true
            }]
        }, {
            xtype: "panel",
            layout: "hbox",
            items: [{
                xtype: "panel",
                width: document.body.clientWidth * 0.025,
                style: "float:left;",
            }, {
                xtype: 'button',
                action: 'login',
                width: document.body.clientWidth * 0.95,
                height: '40px',
                cls: "i-login-check-btn",
                pressedCls: "i-login-pressing",
                locales: {
                    text: 'login.buttonLogin' //'登录:'
                },
            }]
            //xtype: 'button',
            //action: 'login',

            ////ui: 'action'
            //ui: 'normal'
            //}, {
            //    xtype: "panel",
            //    height: "45px",
            //style: "float:left;background-color: #FFFFFF;",
            //},
            //{
            //    xtype: 'button',
            //    action: 'Register',
            //    id: 'Register',
            //    locales: {
            //        text: 'login.buttonRegister' //'登录:'
            //    },
            //    //ui: 'action'
            //    ui: 'normal'
        }, {
            xtype: "panel",
            cls: "i-main-home",
            layout: "hbox",
            docked: 'bottom',
            height: 40,
            style: "background-color: transparent;margin-bottom:20px;",
            items: [{
                xtype: "panel",
                width: document.body.clientWidth / 5,
            }, {
                xtype: "button",
                width: document.body.clientWidth / 5,
                cls: "i-exit-personal-centre",
                id: "registerUserBtn",
                iconAlign: "top",
                style: "float:left;",
                html: "买家注册"
            }, {
                xtype: "panel",
                width: document.body.clientWidth / 5,
            }, {
                xtype: "button",
                width: document.body.clientWidth / 5,
                cls: "i-exit-personal-centre",
                id: "sellerUserRegBtn",
                iconAlign: "top",
                style: "float:left;",
                html: "卖家注册",
            }]
        }, {
            xtype: "panel",
            cls: "i-main-home",
            layout: "hbox",
            docked: 'bottom',
            height: 20,
            style: "background-color: transparent;margin-bottom:20px;",
            items: [{
             
            }]
        }]
    }
});