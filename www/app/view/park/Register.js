Ext.define("ChuangCai.view.park.Register", {
    alternateClassName: 'register',
    extend: "Ext.Panel",
    xtype: "register",
    config: {
        title: '用户注册',
        // xtype: "panel",
        style: "background-color:#ffffff",
        height: (document.body.clientHeight),
        width: (document.body.clientWidth),
        items: [
            {
                xtype: "panel",
                height: "10px",
                style: "background-color: #E5E5E5;"
            },
            {
                xtype: 'panel',
                iconCls: 'home',
                style: 'margin-top:10px;margin-left:10px;',
                defaults: {
                    labelWidth: '40%'
                },
                items: [{
                    xtype: "textfield",
                    id: "RgPhoneNumber",
                    width: (document.body.clientWidth) - 20,
                    placeHolder: "请输入11位手机号码",
                    margin: 0,
                    cls: "logon-field login-input",
                    inputCls: "login-input-height"
                }, {
                    xtype: "spacer",
                    height: "5px"
                }, {
                    xtype: "panel",
                    layout: "hbox",
                    items: [{
                        xtype: "textfield",
                        id: "VerificationNumber",
                        width: (document.body.clientWidth) - 170,
                        placeHolder: "请输入验证码",
                        margin: 0,
                        cls: "logon-field login-input",
                        inputCls: "login-input-height"
                    }, {
                        xtype: "spacer",
                        width: "15px"
                    }, {
                        xtype: "button",
                        id: "getSmsValidNo",
                        cls: "SmsValidNo",
                        html: "获取验证码",
                        hidden: false,
                        width: "130px",
                        style: {
                            "border-radius": "5px",
                            "background-color": "#f4f4f4",
                            "line-height": "38px",
                            "border": "1px solid #ece7e4"
                        }
                    }, {
                        xtype: "img",
                        id: "ChongXinHuoQuTB",
                        html: "重新获取",
                        hidden: true,
                        width: "130px",
                        style: {
                            "border-radius": "5px",
                            "background-color": "#f4f4f4",
                            "line-height": "38px",
                            "border": "1px solid #ece7e4",
                            "text-align": "center",
                            "background-image": "-webkit-linear-gradient(top, rgb(255, 255, 255), rgb(244, 244, 244))"
                        }
                    }]
                }, {
                    xtype: "textfield",
                    height: "10px",
                    id: "loadValidNo",
                    hidden: true
                }, {
                    xtype: "textfield",
                    height: "10px",
                    id: "loadRgPhoneNumber",
                    hidden: true
                },
                {
                    xtype: "spacer",
                    height: "5px"
                },
                {
                    xtype: "passwordfield",
                    id: "passwordText",
                    width: (document.body.clientWidth) - 20,
                    height: 30,
                    placeHolder: "请输入密码",
                    margin: 0,
                    cls: "logon-field  login-input",
                    inputCls: "login-input-height"
                }, {
                    xtype: "panel",
                    style: "color:#999; font-size:14px; padding:5px 0 10px 0",
                    html: '<div style="line-height:20px">请输入由6-16个英文字母、数字或字符组合成的密码<div>',
                }, {
                    xtype: "passwordfield",
                    id: "passwordTextAgin",
                    width: (document.body.clientWidth) - 20,
                    height: 30,
                    placeHolder: "请再次输入密码",
                    margin: 0,
                    cls: "logon-field  login-input",
                    inputCls: "login-input-height"
                },
                {
                    xtype: "spacer",
                    height: "15px"
                }]
            },
             {
                 xtype: "panel",
                 height: "10px",
                 style: "background-color: #E5E5E5;"
             },
             {
                 xtype: "panel",
                 layout: "hbox",
                 style: "margin-top:20px;",
                 items: [{
                     xtype: 'button',
                     id: "userRegisterBtn",
                     width: document.body.clientWidth * 0.95,
                     style: 'float:left;margin-left:8px;',
                     height: '40px',
                     cls: "i-login-check-btn",
                     pressedCls: "i-login-pressing",
                     html: "注册账户",
                 }]
             }, {
                xtype: "panel",
                cls: "i-main-home",
                layout: "hbox",
                docked: 'bottom',
                height: 40,
                style: "background-color: transparent;margin-bottom:60px;",
                items: [{
                    xtype: "button",
                    width: document.body.clientWidth,
                    cls: "i-exit-personal-centre",
                    id: "regToLogin",
                    iconAlign: "top",
                    style: "float:left;",
                    html: "已有账户登录"
                }]
            }]
    }
});