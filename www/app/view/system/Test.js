Ext.define('ChuangCai.view.system.Test', {
    alternateClassName: 'testView',
    extend: "Ext.Panel",
    xtype: "testView",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel"],
    config: {
        id: 'testViewId',
        title: '团餐详情',
        plugins: 'conHref',
        //height: (document.body.clientHeight),
        //style: "background-color: #ffffff",
        //内容列表呈现
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            //hidden: true,
            height: document.body.clientHeight - 50,
            scrollable: {
                direction: "vertical",
                directionLock: true
            },
           // style: "background-color: #ece7e4",
            items: [{
                xtype: "panel",
                id: "RCarouselis",
                //hidden: true,
                height: document.body.clientWidth / 2,
                items: [{
                    xtype: "RCarousel",
                    id: "RCarouselis1",
                    height: document.body.clientWidth / 2,
                }]
            },
            {
                xtype: "panel",
                style: "background-color: #ffffff",
                height: "5px"
            },
            {
                xtype: "panel",
                height: "50px",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth * 5 / 6,
                    style: "float:left;",
                    html: "<p style='padding-left:10px;padding-top:12px;font-size: 14px;color: #999;'><img style='width:15px;height:15px;padding-top:2px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/>2014新款林弯弯毛衣男士圆领针织衫羊毛衫</p>"
                }, {
                    xtype: "panel",
                    width: "1px",
                    height: "45px",
                    style: "float:left;background-color: #E5E5E5;",
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 6,
                    style: "text-align:center",
                    html: "<img style='width:20px;height:20px;' src='" + config.webSite + "Upload/Mobile/shop/main/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>收藏</p>"
                }]
            },
            {
                xtype: "panel",
                style: "background-color: #ffffff",
                height: "5px"
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                layout: "hbox",
                id: "AddGroupDinnerPanl",
                //hidden: true,
                style: "background-color: #ffffff",
                cls: "s-shop-price-button clear",
                items: [{
                    xtype: "img",
                    id: "GDDHPrice",
                    html: "￥180<div style='float:left;font-size:14px;color:#4169E1;padding-left:10px;padding-right:20px;'>会员专享</div></br><p style='padding-left:10px;font-size: 12px;color: #999;'>原价:<u>￥359</u></p><p style='text-align:center;font-size: 12px;color: #999;'>会员专享</p>",
                    height: "36px",
                    width: (document.body.clientWidth - 30) * 0.7,
                    cls: "s-shop-product-price"
                    //}, {
                    //    xtype: "button",
                    //    html: "参团",
                    //    id: "AddGroupDinner",
                    //    height: "36px",
                    //    width: (document.body.clientWidth - 30) * 0.3,
                    //    cls: "i-button"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:10px;",
                height: "35px",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 3,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>卖家包邮</p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 3,
                    style: "float:left",
                    html: "<p style='text-align:center;font-size: 14px;color: #999;'>月销271笔</p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 3,
                    style: "float:left",
                    html: "<p style='text-align:center;font-size: 14px;color: #999;'>上海发货</p>"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:10px;",
                height: "35px",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4 + 20,
                    style: "",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'><img style='width:12px;height:12px;' src='" + config.webSite + "Upload/Mobile/shop/main/commitment.png'/>假一赔三</p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 4 + 20,
                    style: "",
                    html: "<p style='font-size: 14px;color: #999;'><img style='width:12px;height:12px;' src='" + config.webSite + "Upload/Mobile/shop/main/commitment.png'/>信用支付</p>"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:10px;",
                height: "100px",
                cls: "i-main-home",
                hidden: true,
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    style: "float:left;",
                    html: "<p style='padding-left:20px'><img src='resources/images/main/contact.png'/></p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: "<p style='text-align:left;padding-top:30px;font-weight:bold;font-size:15px;'>男装衣服</p><p style='text-align:left;font-size:10px;'>男装衣服内容</p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    style: "float:left;",
                    html: "<p style='padding-left:20px'><img src='resources/images/main/suggest.png'/></p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: "<p style='text-align:left;padding-top:30px;font-weight:bold;font-size:15px;'>女装衣服</p><p style='text-align:left;font-size:10px;'>女装衣服内容</p>"
                }]
            },
            {
                xtype: 'panel',
                style: "background-color: #ffffff",
                disabled: true,
                //hidden: true,
                items: [
                    {
                        xtype: "panel",
                        layout: "vbox",
                        //hidden: true,
                        items: [{
                            xtype: "button",
                            id: "GDNotice",
                            width: (document.body.clientWidth),
                            height: 50,
                            style: "background-color: #ffffff",
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            html: "<p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p>"
                        },
                            {
                                id: "GDNoticeDetail",
                                xtype: "container",
                                hidden: true,
                                width: "100%",
                                cls: "g-info-bd",
                                //tpl: '<div class="mb10"><h3>有效时间</h3><p>2014/8/5 至 2014/9/30<font><tpl if="no_use_week">（周末不可用）</font></tpl></p></div><div class="mb10"><h3>使用时间</h3><p>33333333333333</p></div><div class="mb10"><h3>使用规则</h3><tpl for="info"> <dl class="clear"><dd>·</dd><dt>111111</dt></dl></tpl></div>'
                                html: "<p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p><p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p><p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p>"

                            },
                            {
                                xtype: "panel",
                                height: "10px",
                                style: "background-color: #E5E5E5;",
                            },
                            {
                                width: (document.body.clientWidth),
                                xtype: "panel",
                                items: [{
                                    xtype: "button",
                                    id: "productDetail",
                                    style: "background-color: #ffffff",
                                    height: 50,
                                    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                                    html: "宝贝详情"
                                },
                                {
                                    xtype: "button",
                                    id: "auctionRecord",
                                    style: "background-color: #ffffff",
                                    height: 50,
                                    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                                    html: "竞拍记录<span>(0)</span>"
                                }]
                            },
                            {
                            }
                        ]
                    }
                ]
            }
            ]
        }]
    }
});