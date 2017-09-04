Ext.define("ChuangCai.view.park.QuickLogin", {
    alternateClassName: 'quicklogin',
    extend: "Ext.Panel",
    xtype: "quicklogin",
    config: {
        title: '一键登陆',
        //  xtype: "panel",
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
            style: 'margin-top:20px;margin-left:10px;',
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
                height: "10px"
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
                    //    xtype: "panel",
                    //    width: document.body.clientWidth * 0.025,
                    //    style: "float:left;",
                    //}, 
                    // {
                    xtype: 'button',
                    id: "useRegisterBtn",
                    width: document.body.clientWidth * 0.95,
                    style: 'float:left;margin-left:8px;',
                    height: '40px',
                    cls: "i-login-check-btn",
                    pressedCls: "i-login-pressing",
                    html: "登陆",
                }]
            },
         {
             xtype: "panel",
             cls: "i-main-home",
             layout: "hbox",
             docked: 'bottom',
             height: 80,
             style: "background-color: transparent;margin-bottom:40px;",
             items: [{

             }]
         },
            {
                xtype: "panel",
                cls: "i-main-home",
                layout: "hbox",
                docked: 'bottom',
                height: 80,
                style: "background-color: transparent;margin-bottom:20px;",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 9,
                }, {
                    xtype: "button",
                    width: document.body.clientWidth / 3,
                  //  cls: 'i-button-r',
                    id: "registerUserBtn",
                    iconAlign: "left",
                    iconCls: "i-wechat-logo",
                    style: ' float:left;   border: 0px;',
                 
                   // html: "微信登陆"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 9,
                }, {
                    xtype: "button",
                    width: document.body.clientWidth / 3,
                   // cls: 'i-button-r',
                    id: "qqLoginBtn",
                    iconAlign: "top",
                    iconCls: "i-qq-logo",
                    style: ' border: 0px;',
                   // html: "QQ登陆",
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 9,
                }]
            }]
    }
});