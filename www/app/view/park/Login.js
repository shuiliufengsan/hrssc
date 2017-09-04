Ext.define("ChuangCai.view.park.Login", {
    alternateClassName: 'login',
    extend: "Ext.Panel",
    xtype: "login",
    config: {
        title: '用户登陆',
        //  xtype: "panel",
        id:'loginId',
        style: "background-color:#ffffff",
        height: (document.body.clientHeight),
        width: (document.body.clientWidth),

        items: [
              //{
              //    xtype: "panel",
              //    height: "10px",
              //    style: "background-color: #E5E5E5;"
              //},
              {
                  xtype: 'fieldset',
                  iconCls: 'home',
                  style: "    margin-top: 37%;",
                  defaults: {
                      labelWidth: '40%'
                  },
                  items: [{
                      xtype: 'textfield',
                       
                      id: 'phonenumber',
                      placeHolder: '请输入手机号码'
                  }, {
                      xtype: 'passwordfield',
                      id: 'password',
                    
                      placeHolder: '请输入密码'
                  }]
              },
              //{
              //    xtype: "panel",
              //    height: "10px",
              //    style: "background-color: #E5E5E5;"
              //},
            {
                xtype: "panel",
                layout: "hbox",
                style: "margin-top:20px;",
                items: [{
                    xtype: 'button',
                    id: "userLoginBtn",
                    width: document.body.clientWidth * 0.91,
                    style: 'float:left;margin-left:15px;margin-right: 18px;',
                    height: '47px',
                    cls: "i-login-check-btn",
                    pressedCls: "i-login-pressing",
                    html: "登陆",
                }]
            },
            {
                xtype: "panel",
                layout: "hbox",
                // style: "margin-top:20px;",
                cls: "i-login",
                items: [
                    //{
                    //    xtype: "button",
                    //    //  width: document.body.clientWidth / 4,
                    //    // cls: "i-exit-personal-centre",
                    //    id: "registerBtn",
                    //    // iconAlign: "top",
                    //    style: "padding-right:0px;",
                    //    html: "注册"
                    //},
                    {
                    xtype: "button",
                  //  width: document.body.clientWidth / 4,
                    // cls: "i-exit-personal-centre",
                    id: "quickLoginBtn",
                    cls: "phone123",
                   // iconAlign: "top",
                    style: "padding-right:0px;font-size: 1.1em;margin-top: .25em;margin-bottom: 40%;",
                    html: "<font color=#5B6F99>手机号快捷登陆</font>"
                }]
            },
            //{
            //    xtype: "panel",
            //    height: "1px",
            //    style: "background-color: #E5E5E5;"

            //},
            //  {

            //      xtype: "panel",
            //      layout: "hbox",
            //      height: "10px",
            //      width: "110px",
            //      cls: "phone123",
            //      html:"其他登录方式",
            //      style: "background-color: white;margin-top: -15px;margin-left: 36%;"
            //  },
           
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
                height: 100,
                style: "background-color: transparent;margin-bottom:0px;height: 80px",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 9,
                    height: 80,
                }, {
                    xtype: "button",
                    width: document.body.clientWidth / 3,
                    //  cls: 'i-button-r',
                    id: "registerUserBtn",
                    iconAlign: "left",
                    iconCls: "i-wechat-logo",
                    style: ' float:left;    border: 0px;',

                    //html: " <br><br><br><br>微信登陆"
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
                    style: '    border: 0px;',
                    //html: "QQ登陆",
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 9,
                }]
            }]
    }
});