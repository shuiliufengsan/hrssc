Ext.define("ChuangCai.view.user.SellerRegister", {
    alternateClassName: 'sellerRegister',
    extend: "Ext.Panel",
    xtype: "sellerRegister",
    config: {
        xtype: "panel",
        style: "background-color:#ffffff",
        height: (document.body.clientHeight),
        width: (document.body.clientWidth),
        items: [{
            xtype: "panel",
            style: {
                "padding": "10px"
            },
            items: [{
                xtype: "textfield",
                id: "RgPhoneNumber",
                width: (document.body.clientWidth) - 20,
                placeHolder: "请输入手机号码",
                margin: 0,
                cls: "logon-field login-input",
                inputCls: "login-input-height"
            }, {
                xtype: "spacer",
                height: "10px"
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
                xtype: "spacer",
                height: "10px"
            }, {
                xtype: "textfield",
                id: "CompanyName",
                width: (document.body.clientWidth)-20,
                placeHolder: "请输入公司名称",
                margin: 0,
                cls: "logon-field login-input",
                inputCls: "login-input-height"
            }, {
                xtype: "spacer",
                height: "10px"
            }, {
                xtype: "passwordfield",
                id: "passwordText",
                width: (document.body.clientWidth) - 20,
                placeHolder: "请输入密码",
                margin: 0,
                cls: "logon-field login-input",
                inputCls: "login-input-height"
            }, {
                xtype: "panel",
                style: "color:#999; font-size:14px; padding:5px 0 10px 0",
                html: '<div style="line-height:20px">请输入由6-16个英文字母、数字或字符组合成的密码<div>',
            }, {
                xtype: "passwordfield",
                id: "passwordTextAgin",
                width: (document.body.clientWidth) - 20,
                placeHolder: "请再次输入密码",
                margin: 0,
                cls: "logon-field login-input",
                inputCls: "login-input-height"
            }, {
                xtype: "spacer",
                height: "15px"
            }, {
                xtype: "panel",
                layout: "hbox",
                items: [{
                    //    xtype: "panel",
                    //    width: document.body.clientWidth * 0.025,
                    //    style: "float:left;",
                    //}, {
                    xtype: 'button',
                    id: "useRegisterBtn",
                    width: document.body.clientWidth * 0.95,
                    height: '40px',
                    cls: "i-login-check-btn",
                    pressedCls: "i-login-pressing",
                    html: "注册卖家",
                }]
            }]
        }, {
            xtype: "panel",
            cls: "i-main-home",
            layout: "hbox",
            docked: 'bottom',
            height: 20,
            style: "background-color: transparent;margin-bottom:20px;",
            items: [{
                xtype: "button",
                width: document.body.clientWidth,
                cls: "i-exit-personal-centre",
                id: "regToLogin",
                iconAlign: "top",
                style: "float:left;",
                html: "已有账户登录",
            }]
        }]
    }
});