Ext.define('ChuangCai.view.park.PersonCenter', {
    alternateClassName: 'personCenter',
    extend: "Ext.Panel",
    xtype: "personCenter",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.dataview.List', ],
    config: {
        id: 'personCenterId',
        title: "我的",
        plugins: 'conHref',
        //height: (document.body.clientHeight),
        style: "background-color: #ffffff",
        otherMenu: 'bottomBar',
        scrollable: 'false',
        clear: 0,
        //内容列表呈现
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            items: [{
                xtype: 'panel',
                disabled: true,
                layout: "vbox",
                items: [{
                    xtype: "button",
                    id: "IntoPersonalInfo",
                    style: 'background: url(resources/images/tb_bk_my_top.png);background-size:cover; ',
                    height: 150,
                    cls: "personcenter",
                   // cls: "shop-personal-hd shop-personal-hd-nobd x-button-no-padding",
                    html: "<div><div style=''><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div><div ><p>请登录</p></div></div>"
                }]
            },
            {
                xtype: "panel",
                height: "10px",
                style: "background-color: #F5F5F9;"
            },
            {
                xtype: 'panel',
                items: [{
                    xtype: "panel",
                    layout: "vbox",
                    //hidden: true,
                    items: [ {
                        xtype: "button",
                        id: "myCollect",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/offer-record.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>我的收藏</p></div>"
                    },                    
                     {
                        xtype: "button",
                        id: "myCar",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/commentsSubmitted_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>我的车辆</p></div>"
                    },
                    {
                        xtype: "button",
                        id: "clearLocalStorage",
                        height: 50,
                        cls: "personalCeter-hd x-button-no personalCeter-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/clear_cocal_storge.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;font-weight: normal'>清空缓存</p></div>"
                    }, 
                    {
                        xtype: "panel",
                        height: "10px",
                        style: "background-color: #F5F5F9;"
                    },
                    {
                        xtype: "button",
                        id: "aboutPark",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/about_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>关于</p></div>"
                    }, {
                        xtype: "button",
                        id: "exitCenter",
                        height: 50,
                        cls: "personalCeter-hd x-button-no personalCeter-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/Coupon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;font-weight: normal'>退出</p></div>"
                    }, {
                        xtype: "panel",
                        height: "10px",
                        style: "background-color: #F5F5F9;"
                    }, {
                        xtype: "button",
                        id: "contactTel",
                        height: 50,
                        style: "background:0",
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/phone_icon.png'/></div><div style='padding-top:10px;margin-left:10px;'><a href=tel:02150260822 style=text-decoration:none><p style='font-size: 16px;color:#c00;'><label style='font-size: 14px;color: black;'>联系方式：</label>021-50260822</p></a></div>"
                    }]
                }]
            }]
        }]
    }
});