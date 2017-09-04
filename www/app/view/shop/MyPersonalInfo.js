Ext.define('ChuangCai.view.shop.MyPersonalInfo', {
    alternateClassName: 'myPersonalInfo',
    extend: "Ext.Panel",
    xtype: "myPersonalInfo",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        id: 'myPersonalInfoId',
        title: '账户详情',
        plugins: 'conHref',
        //height: (document.body.clientHeight),
        style: "background-color: #ffffff",
        //内容列表呈现
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            height: document.body.clientHeight - 45,
            items: [{
                xtype: "panel",
                layout: "vbox",
                items: [{
                    xtype: "panel",
                    id: "pesonalBaseInfo",
                    width: (document.body.clientWidth),
                    height: 30,
                    style: "border-bottom: 1px solid #ebe7e4;font-size: 14px;",
                    cls: "addProduct-fieldset-title",
                    html: "<div style='padding-left:10px;padding-top:4px;'><p><b>基本信息</b></p><div>"
                }, {
                    width: (document.body.clientWidth),
                    xtype: "panel",
                    items: [{
                        xtype: "button",
                        id: "userPhoto",
                        height: 70,
                        cls: "bg-color-white personal-info-photo personal-info-photo-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;margin-top:19.5px;'><p style='font-size: 14px;'>头像</p></div><div style='float:right;margin-right:10px;margin-top:5px;'><img style='border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div>",
                    }, {
                        xtype: "button",
                        id: "userId",
                        height: 40,
                        hidden: true,
                        cls: "bg-color-white personal-info-list x-button-no personal-info-list-nobd x-button-no-padding",
                        style: "background-color: #ffffff:background:0",
                        html: "<div style='float:left'><p style='font-size: 14px;'>用户ID</p></div><div style='float:right'><p style='font-size: 14px;'>Admin</p></div>"
                    }, {
                        xtype: "button",
                        id: "userCode",
                        height: 40,
                        style: "background-color: #ffffff;background:0",
                        cls: "personal-info-list x-button-no personal-info-list-nobd x-button-no-padding",
                        pressedCls: "",
                        html: "<div style='float:left'><p style='font-size: 14px;'>用户名</p></div><div style='float:right'><p style='font-size: 14px;'>Admin</p></div>"
                    }, {
                        xtype: "button",
                        style: "background-color: #ffffff",
                        id: "userNick",
                        height: 40,
                        cls: "personal-info-list x-button-no personal-info-list-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;'><p style='font-size: 14px;'>昵称</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>未设置</p></div>"
                    }, {
                        xtype: "button",
                        id: "userEmail",
                        height: 40,
                        style: "background-color: #ffffff",
                        cls: "personal-info-list x-button-no personal-info-list-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left'><p style='font-size: 14px;'>邮箱</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>未设置</p></div>"
                    }, {
                        xtype: "button",
                        style: "background-color: #ffffff",
                        id: "userTelephone",
                        height: 40,
                        cls: "personal-info-list x-button-no personal-info-list-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left'><p style='font-size: 14px;'>手机</p></div><div style='float:right'><p style='font-size: 14px;padding-right:15px;'>未设置</p></div>"

                    }]
                }]
            }, {
                xtype: "panel",
                docked: 'bottom',
                layout: "hbox",
                items: [{
                    xtype: 'button',
                    itemId: 'loginOut1',
                    width: document.body.clientWidth,
                    height: '40px',
                    cls: "productView-tab",
                    pressedCls: "i-productView-pressing",
                    html: "<p style='color:#fff'>退出当前账号</p>",
                }]
            }]
        }]
    }
});