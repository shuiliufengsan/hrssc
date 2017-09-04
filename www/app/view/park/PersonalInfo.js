Ext.define('ChuangCai.view.park.PersonalInfo', {
    alternateClassName: 'personalInfo',
    extend: "Ext.Panel",
    xtype: "personalInfo",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        id: 'personalInfoId',
        title: '个人详情',
        plugins: 'conHref',
        style: "background-color: #ffffff",
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            height: document.body.clientHeight - 50,
            items: [{
                xtype: "button",
                id: "userPhoto",
                height: 70,
                cls: "bg-color-white personal-info-photo personal-info-photo-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;margin-top:19.5px;'><p style='font-size: 14px;'>头像</p></div><div style='float:right;margin-right:10px;margin-top:5px;'><img style='border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div>",
            }, {
                xtype: "button",
                id: "userName",
                height: 40,
                style: "background:0",
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                html: "<div style='float:left'><p style='font-size: 14px;'>会员名</p></div><div style='float:right'><p style='font-size: 14px;'>Admin</p></div>"
            }, {
                xtype: "button",
                id: "userNickname",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left'><p style='font-size: 14px;'>昵称</p></div><div style='float:right'><p style='font-size: 14px;margin-right:10px;'>未设置</p></div>"
            }, {
                xtype: "button",
                id: "userEmail",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left'><p style='font-size: 14px;'>邮箱</p></div><div style='float:right'><p style='font-size: 14px;margin-right:10px;'>未设置</p></div>"
            }, {
                xtype: "button",
                id: "userTelephone",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left'><p style='font-size: 14px;'>手机</p></div><div style='float:right'><p style='font-size: 14px;'>Admin</p></div>"
            }, {
                //xtype: "button",
                //id: "userId",
                //height: 40,
                //style: "background:0",
                //cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                //html: "<div style='float:left'><p style='font-size: 14px;'>用户ID</p></div><div style='float:right'><p style='font-size: 14px;'>Admin</p></div>"
            }]
        }, {
            xtype: "panel",
            layout: "hbox",
            docked: 'bottom',
            height: "40px",
            items: [{
                itemId: 'loginOut1',
                xtype: 'button',
                width: document.body.clientWidth ,
                height: '40px',
                cls: "x-button-no g-info-hd-nobd x-button-no-padding order-info-one-next",
                pressedCls: "i-exit-pressing",
                html: "<div style='padding-top:5px;font-weight: normal;'><p style='font-size: 14px;color: #fff;'>退出当前账号</p></div>"
            }]
        }]
    }
});