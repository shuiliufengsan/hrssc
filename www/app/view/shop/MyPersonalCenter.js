Ext.define('ChuangCai.view.shop.MyPersonalCenter', {
    alternateClassName: 'myPersonalCenter',
    extend: "Ext.Panel",
    xtype: "myPersonalCenter",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel"],
    config: {
        id: 'myPersonalCenterId',
        title: '我的',
        plugins: 'conHref',
        //height: (document.body.clientHeight),
        style: "background-color: #ffffff",
        otherMenu: 'bottomBar',
        clear: 0,
        //内容列表呈现
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            //height: document.body.clientHeight - 50,
            items: [{
                xtype: 'panel',
                disabled: true,
                layout: "vbox",
                //height: 150,
                //hidden: true,
                items: [{
                    xtype: "button",
                    id: "IntoMyPersonalInfo",
                    //style: "background-color: #FF7256;",
                    style: 'background: url(resources/images/tb_bk_my_top.png);background-size:cover; ',
                    height: 70,
                    cls: "shop-personal-hd shop-personal-hd-nobd x-button-no-padding",
                    html: "<div><div style='float:left;padding-right:20px;padding-top:4px;'><img style='width:50px;height:50px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div><div style='padding-top:15px;float:left'><p>请登录</p><img style='width:50px;height:20px;display:none' src='" + config.webSite + "Upload/Mobile/shop/main/exh.png'/></div><div><img style='width:30px;height:45px;float:right;padding-top:15px;' src='" + config.webSite + "Upload/Mobile/shop/main/u-list-icon.png'/></div></div>"
                }, {
                    xtype: "panel",
                    style: "background-color: #BA0116;padding-top:2px;padding-bottom:5px;",
                    height: "50px",
                    cls: "i-main-home",
                    layout: "hbox",
                    //style: 'background: url(resources/images/tb_bk_my_top.png);background-color: #FF4500;padding-top:5px;padding-bottom:5px;',
                    items: [{
                        xtype: "button",
                        height: "40px",
                        id: "collectionProductView",
                        width: document.body.clientWidth / 2,
                        style: "text-align:center;",
                        html: "<p style='text-align:center;font-size: 12px;color: #FFFFFF;'>0</br>收藏的宝贝</p>"
                    }, {
                        xtype: "panel",
                        width: "1px",
                        height: "40px",
                        style: "float:left;background-color: #FFFFFF;margin-top: 3px;",
                    },
                    //{
                    //    xtype: "button",
                    //    width: document.body.clientWidth / 3,
                    //    style: "text-align:center",
                    //    html: "<p style='text-align:center;font-size: 12px;color:#FFFFFF;'>0</br>收藏店铺</p>"
                    //}, {
                    //    xtype: "panel",
                    //    width: "1px",
                    //    height: "45px",
                    //    style: "float:left;background-color: #FFFFFF;",
                    //},
                    {
                        xtype: "button",
                        id: "myFootPrint",
                        width: document.body.clientWidth / 2,
                        //style: "text-align:center",
                        html: "<p style='text-align:center;font-size: 12px;color: #FFFFFF;'>0</br>我的足迹</p>"
                    }]
                }]
            }, {
                xtype: "panel",
                height: "10px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "button",
                id: "myBinddingPro",
                height: 50,
                cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:5px;'><img src='resources/images/offer-record.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>我的拍卖</p></div>"
                //},
                //{
                //    xtype: "panel",
                //    style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                //    height: "50px",
                //    cls: "i-main-home",
                //    layout: "hbox",
                //    items: [{
                //        xtype: "panel",
                //        width: document.body.clientWidth / 5 - 2.5,
                //        style: "text-align:center",
                //        html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>待付款</p>"
                //    }, {
                //        xtype: "panel",
                //        width: "1px",
                //        height: "45px",
                //        style: "float:left;background-color: #E5E5E5;",
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 5 - 2.5,
                //        style: "text-align:center",
                //        html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>待发货</p>"
                //    }, {
                //        xtype: "panel",
                //        width: "1px",
                //        height: "45px",
                //        style: "float:left;background-color: #E5E5E5;",
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 5 - 2.5,
                //        style: "text-align:center",
                //        html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>待收货</p>"
                //    }, {
                //        xtype: "panel",
                //        width: "1px",
                //        height: "45px",
                //        style: "float:left;background-color: #E5E5E5;",
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 5 - 2.5,
                //        style: "text-align:center",
                //        html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>待评价</p>"
                //    }, {
                //        xtype: "panel",
                //        width: "1px",
                //        height: "45px",
                //        style: "float:left;background-color: #E5E5E5;",
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 5 + 10,
                //        style: "text-align:center",
                //        html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>退款/售后</p>"
                //    }]
            }, {
                xtype: 'panel',
                items: [{
                    xtype: "panel",
                    layout: "vbox",
                    //hidden: true,
                    items: [{
                        xtype: "button",
                        id: "publishedProduct",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/published-icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>已发布拍品</p></div>"
                    }, {
                        xtype: "button",
                        id: "addProduct",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/addProduct.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>拍品发布</p></div>"
                    }, {
                        //    xtype: "button",
                        //    id: "commentsTestBtn",
                        //    style: "background-color: #ffffff",
                        //    height: 50,
                        //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        //    html: "<p style='font-size: 14px;color: #999;'>我的卡劵包</p>",
                        //    listeners: {
                        //        tap: function () {
                        //            debugger;
                        //            var url = util.getMobileSite() + "SystemManage/AlipayMobile.aspx";
                        //            //window.open(url);
                        //            //window.location.replace(url);
                        //            window.navigate(url)
                        //        }
                        //    }
                        //}, {
                        //    xtype: "button",
                        //    id: "productDetail",
                        //    style: "background-color: #ffffff",
                        //    height: 50,
                        //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        //    html: "<p style='font-size: 14px;color: #999;'>生活劵</p>"
                        //}, {
                        //    xtype: "button",
                        //    id: "auctionRecord",
                        //    style: "background-color: #ffffff",
                        //    height: 50,
                        //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        //    html: "<p style='font-size: 14px;color: #999;'>网店劵<span>(15)</span></p>"
                        //},
                        //{
                        //    xtype: "button",
                        //    id: "productDetail1",
                        //    style: "background-color: #ffffff",
                        //    height: 50,
                        //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        //    html: "<div style='float:left;padding-top:5px;'><img style='width:30px;height:30px;' src='" + config.webSite + "Upload/Mobile/shop/main/credit.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>会员卡</p></div>"
                        //}, {
                        //    xtype: "panel",
                        //    height: "10px",
                        //    style: "background-color: #E5E5E5;"
                        //}, {
                        //    xtype: "button",
                        //    id: "productDetail2",
                        //    style: "background-color: #ffffff",
                        //    height: 50,
                        //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        //    html: "<p style='font-size: 14px;color:black;'>我的专享特权</p>"
                        //}, {
                        xtype: "panel",
                        height: "10px",
                        style: "background-color: #E5E5E5;"
                    }, {
                        xtype: "button",
                        id: "commentsSubmitted",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/commentsSubmitted_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>意见反馈</p></div>"
                    }, {
                        xtype: "button",
                        id: "clearLocalStorage",
                        height: 50,
                        cls: "personalCeter-hd x-button-no personalCeter-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/clear_cocal_storge.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;font-weight: normal'>清空缓存</p></div>"
                    }, {
                        xtype: "button",
                        id: "aboutBaoPai",
                        height: 50,
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:5px;'><img src='resources/images/about_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>关于保拍</p></div>"
                    }, {
                        xtype: "panel",
                        height: "10px",
                        style: "background-color: #E5E5E5;"
                    }, {
                        xtype: "button",
                        id: "productDetail5",
                        height: 50,
                        style: "background:0",
                        cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                        pressedCls: "personalCeter-pressing",
                        html: "<div style='float:left;padding-top:10px;'><img src='resources/images/phone_icon.png'/></div><div style='float:left;padding-top:5px;padding-left:8px;'><a href=tel:02150260822 style=text-decoration:none><p style='font-size: 16px;color:#c00;'>021-50260822</p><p style='font-size: 12px;color: black;'>保拍网服务热线，工作日：09:00-18:00</p></a></div>"
                    }]
                }]
            }]
        }]
    }
});