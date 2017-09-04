Ext.define('ChuangCai.view.park.PayOrder', {
    alternateClassName: 'payOrder',
    extend: "Ext.Panel",
    xtype: "payOrder",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        id: 'payOrderId',
        title: '收银台',
        scrollable: false,
        plugins: 'conHref',
        style: "background-color: #E5E5E5;",
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            height: document.body.clientHeight - 50,
            items: [{
                xtype: "panel",
                height: "20px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                height: "40px",
                style: "background-color: #ffffff;",
                html: "<div style='font-size: 14px;color: black;font-weight: normal; padding-top:10px;padding-left:10px;'>选择支付方式</div>"
            },
            {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "button",
                id: "clearLocalStorage1",
                height: 50,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:12px;'><img src='resources/images/alipay.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;font-size: 14px;color: black;font-weight: normal;text-align:left;'>支付宝<br/><p style='font-size:12px;color: #999;'>推荐支付宝用户使用</p></div><div style='float:right;font-size:14px;padding-top:10px;'>无优惠<input type='radio' name='payway' value='无优惠' style='width:20px;height:20px;'/></div>"
            }, {
                xtype: "button",
                id: "clearLocalStorage",
                height: 50,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:12px;'><img src='resources/images/wxpay.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;font-size: 14px;color: black;font-weight: normal;text-align:left;'>微信支付<br/><p style='font-size:12px;color: #999;'>推荐微信用户使用</p></div><div style='float:right;font-size:14px;padding-top:10px;'>无优惠<input type='radio' name='payway' value='无优惠' style='width:20px;height:20px;'/></div>"
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                height: "20px",
                style: "background-color: #E5E5E5;"
            },{
                xtype: "button",
                id: "userTelephone",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left'><p style='font-size: 14px;'>实付金额</p></div><div style='float:right'><p style='font-size: 18px; color:red;font-weight:bolder'>￥50.00</p></div>"
            }]
        }, {
            xtype: "panel",
            layout: "hbox",
            docked: 'bottom',
            height: "40px",
            style: 'margin-bottom:10px;',
            items: [{
                xtype: 'button',
                id: 'getFeeBtn',
                style: 'float:left;margin-left:8px;',
                width: document.body.clientWidth * 0.95,
                height: '40px',
                cls: "i-login-check-btn",
                pressedCls: "i-login-pressing",
                text: '确认支付'
            }]
        }]
    }
});