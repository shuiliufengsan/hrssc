Ext.define('ChuangCai.view.shop.ProductListView', {
    alternateClassName: 'productListView',
    extend: "Ext.Panel",
    xtype: "productListView",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel", 'ux.Countdown'],
    config: {
        id: 'productListViewId',
        title: '标的物详情',
        plugins: 'conHref',
        style: "background-color: #ffffff",
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "productListView",
            height: document.body.clientHeight - 45,
            scrollable: {
                direction: "vertical",
                directionLock: true
            },
            items: [{
                xtype: "panel",
                height: document.body.clientWidth / 2,
                items: [{
                    xtype: "RCarousel",
                    id: "ProductImgView",
                    height: document.body.clientWidth / 2,
                }]

            }, {
                xtype: "panel",
                style: "background-color: #ffffff",
                height: "5px"
            }, {
                xtype: "panel",
                height: "50px",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "productName",
                    width: document.body.clientWidth * 5 / 6,
                    style: "float:left;",
                }, {
                    xtype: "panel",
                    width: "1px",
                    height: "45px",
                    style: "float:left;background-color: #E5E5E5;",
                }, {
                    xtype: "button",
                    id: "collectionProduct",
                    width: document.body.clientWidth / 6,
                    style: "text-align:center",
                    html: "<img style='width:20px;height:20px;' src='resources/images/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>收藏</p>"
                }]
            }, {
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
                height: "30px",
                style: "background-color: #ffffff",
                cls: "s-shop-price-button clear",
                items: [{
                    xtype: "panel",
                    id: "productPrice",
                    width: (document.body.clientWidth - 30) * 0.5,
                    style: "color:#c00",
                    cls: "s-shop-product-price"
                }, {
                    xtype: "panel",
                    id: "focusOnNum",
                    width: (document.body.clientWidth - 30) * 0.5,
                    //html: "<p style='padding-left:10px;font-size: 12px;color: #999;'人报名&nbsp&nbsp 10人关注</p>"
                }]
                //},{
                //    xtype: "panel",
                //    style: "background-color: #ffffff;padding-top:10px;",
                //    height: "35px",
                //    cls: "i-main-home",
                //    layout: "hbox",
                //    items: [{
                //        xtype: "panel",
                //        width: document.body.clientWidth / 3,
                //        style: "float:left",
                //        html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>卖家包邮</p>"
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 3,
                //        style: "float:left",
                //        html: "<p style='text-align:center;font-size: 14px;color: #999;'>月销271笔</p>"
                //    }, {
                //        xtype: "panel",
                //        width: document.body.clientWidth / 3,
                //        style: "float:left",
                //        html: "<p style='text-align:center;font-size: 14px;color: #999;'>上海发货</p>"
                //    }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;",
                id:"auctionClass",
                height: "25px",
                html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>竞价类型：正常拍</p>"
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "startDateTime",
                    width: document.body.clientWidth ,
                    style: "float:left"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "endDateTime",
                    width: document.body.clientWidth ,
                    style: "float:left"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;",
                height: "30px",
                layout: "hbox",
                items: [{
                    xtype: 'countdown',
                    id: "countdownTime",
                    //format默认格式
                    format: 'Y-m-d H:i:s',
                    width: 170,
                    style: "float:left;margin-left:10px;margin-bottom:5px;font-size: 14px;color: #c00;",
                    //这里需要和上面的format对应，否则无法转换成时间，其他参数和lable相同
                    value: '2015-02-13 13:46:00'
                }, {
                    xtype: "panel",
                    style: "float:left",
                    id: "beginTimeHtml",
                    hidden: true,
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>开始</p>"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;"
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "startPrice",
                    width: document.body.clientWidth / 2,
                    style: "float:left"
                }, {
                    xtype: "panel",
                    id: "evaluatePrice",
                    width: document.body.clientWidth / 2,
                    style: "float:left"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "depositPrice",
                    width: document.body.clientWidth / 2,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>保证金&nbsp&nbsp</p>"
                }, {
                    xtype: "panel",
                    id: "increasePrice",
                    width: document.body.clientWidth / 2 ,
                    style: "float:left",
                    html: "<p style='font-size: 14px;color: #999;'>加价幅度&nbsp&nbsp</p>"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "amount",
                    width: document.body.clientWidth / 2,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>货物数量&nbsp&nbsp</p>"
                }, {
                    xtype: "panel",
                    id: "weight",
                    width: document.body.clientWidth / 2,
                    style: "float:left",
                    html: "<p style='font-size: 14px;color: #999;'>货物重量&nbsp&nbsp</p>"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "address",
                    width: document.body.clientWidth / 2,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>产地&nbsp&nbsp</p>"
                }, {
                    xtype: "panel",
                    id: "factory",
                    width: document.body.clientWidth / 2,
                    style: "float:left",
                    html: "<p style='font-size: 14px;color: #999;'>货物生产商&nbsp&nbsp</p>"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "marketPrice",
                    width: document.body.clientWidth,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>货物的原始价值（单价）&nbsp&nbsp</p>"
                }]
            }, {
                xtype: "panel",
                style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
                height: "25px",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    id: "street",
                    width: document.body.clientWidth ,
                    style: "float:left",
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>目前货物存放地&nbsp&nbsp￥200</p>"
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
                    html: "<p style='padding-left:10px;font-size: 14px;color: #999;'><img style='width:12px;height:12px;' src='" + config.webSite + "Upload/Mobile/shop/main/commitment.png'/>认证商品</p>"
                }, {
                    xtype: "panel",
                    width: document.body.clientWidth / 4 + 20,
                    style: "",
                    html: "<p style='font-size: 14px;color: #999;'><img style='width:12px;height:12px;' src='" + config.webSite + "Upload/Mobile/shop/main/commitment.png'/>信用支付</p>"
                }]
            }, {
                xtype: "panel",
                height: "1px",
                style: "background-color: #E5E5E5;",
            }, {
                xtype: 'panel',
                style: "background-color: #ffffff",
                disabled: true,
                //hidden: true,
                items: [{
                    xtype: "panel",
                    layout: "vbox",
                    items: [
                    //    {
                    //    xtype: "button",
                    //    id: "GDNotice",
                    //    width: (document.body.clientWidth),
                    //    height: 50,
                    //    style: "background-color: #ffffff",
                    //    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                    //    html: "<p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p>"
                    //}, {
                    //    id: "GDNoticeDetail",
                    //    xtype: "container",
                    //    hidden: true,
                    //    width: "100%",
                    //    cls: "g-info-bd",
                    //    //tpl: '<div class="mb10"><h3>有效时间</h3><p>2014/8/5 至 2014/9/30<font><tpl if="no_use_week">（周末不可用）</font></tpl></p></div><div class="mb10"><h3>使用时间</h3><p>33333333333333</p></div><div class="mb10"><h3>使用规则</h3><tpl for="info"> <dl class="clear"><dd>·</dd><dt>111111</dt></dl></tpl></div>'
                    //    html: "<p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p><p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p><p style='font-size: 14px;color: #999;'>满99元,省3元,想包邮</p>"

                    //},
                    {
                        xtype: "panel",
                        height: "10px",
                        style: "background-color: #E5E5E5;",
                    }, {
                        xtype: "textfield",
                        height: "10px",
                        hidden: true,
                        id: "loadProductId"
                        //传id控件
                    }, {
                        xtype: "textfield",
                        height: "10px",
                        hidden: true,
                        id: "loadCollectionId"
                        //传收藏标记控件
                    }, {
                        width: (document.body.clientWidth),
                        xtype: "panel",
                        items: [{
                            xtype: "button",
                            id: "subjectMatterAddress",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            html: "<p style='font-size: 14px;color: #999;'>标的物所在地</p>"
                        }, {
                            xtype: "button",
                            id: "productIntroduce",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            html: "<p style='font-size: 14px;color: #999;'>标的物介绍</p>"
                        }, {
                            xtype: "button",
                            id: "productImage",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            html: "<p style='font-size: 14px;color: #999;'>标的物图片</p>"
                        }, {
                            xtype: "button",
                            id: "productVideo",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            //hidden: true,
                            html: "<p style='font-size: 14px;color: #999;'>标的物视频</p>"
                        }, {
                            xtype: "button",
                            id: "productTest",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            //hidden: true,
                            html: "<p style='font-size: 14px;color: #999;'>竞价流程</p>"
                        }, {
                            xtype: "button",
                            id: "offerRecord",
                            style: "background-color: #ffffff",
                            height: 50,
                            cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                            pressedCls: "personalCeter-pressing",
                            html: "<p style='font-size: 14px;color: #999;'>出价记录<span>(0)</span></p>"
                        }]
                    }]
                }]
            }, {
                xtype: "panel",
                docked: 'bottom',
                layout: "hbox",
                //style: "border-top:1px solid #EDEDED;",
                items: [{
                    xtype: 'button',
                    id: "submitEnsureMon",
                    width: document.body.clientWidth,
                    height: '40px',
                    cls: "productView-tab",
                    pressedCls: "i-productView-pressing",
                    html: "<p style='color:#fff'>报名交保证金</p>",
                }, {
                    xtype: 'button',
                    id: "submitOfferRecord",
                    hidden: true,
                    width: document.body.clientWidth,
                    height: '40px',
                    cls: "productView-tab",
                    pressedCls: "i-productView-pressing",
                    html: "<p style='color:#fff'>出价</p>",
                }]
            }]
        }]
    }
});