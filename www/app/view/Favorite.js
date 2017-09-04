Ext.define('ChuangCai.view.Favorite', {
    alternateClassName: 'favorite',
    extend: 'Ext.Panel',
    xtype: 'favorite',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', "ux.plugin.RCarousel"],
    config: {
        id: 'favoirteId1',
        title: '分类',
        locales: {
            title: 'home.title'
        },
        style: "background-color: #ffffff",
        otherMenu: 'bottomBar',
        clear: 0,
        cls: 'i-main-home',
        //layout: 'vbox',
        //defaults: {
        //    height: '4.5em',
        //    layout: 'hbox',
        //    defaults: {
        //        flex: 1
        //    }
        //}
        //items: [{
        //    xtype: "panel",
        //    layout: "vbox",
        //    id: "RestaurantDetailHide",
        //    //hidden: true,
        //    height: document.body.clientHeight - 100,
        //    //height:200,
        //    //docked: 'top',
        //    scrollable: {
        //        direction: "vertical",
        //        directionLock: true
        //    },
        //    //style: "background-color: #ece7e4",
        //    items: [
        //        {
        //            xtype: "panel",
        //            id: "RCarouselis",
        //            //hidden: true,
        //            height: document.body.clientWidth / 3,
        //            items: [{
        //                xtype: "RCarousel",
        //                id: "RCarouselis1",
        //                height: document.body.clientWidth / 3,
        //            }]
        //        },
        //    {
        //        xtype: "panel",
        //        style: "background-color: #ffffff",
        //        height: "10px"
        //    },
        //    {
        //        xtype: "panel",
        //        style: "background-color: #ffffff",
        //        height: "80px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "button",
        //            width: document.body.clientWidth / 4,
        //            id: "pOnline",
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-1",
        //            text: "点菜"
        //        }, {
        //            xtype: "button", id: "ToCoupon",
        //            width: document.body.clientWidth / 4,
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-2",
        //            text: "一起团"
        //        }, {
        //            xtype: "button",
        //            id: "ToCoupon2",
        //            width: document.body.clientWidth / 4,
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-3",
        //            text: "聚优惠"
        //        }, {
        //            xtype: "button",
        //            width: document.body.clientWidth / 4,
        //            id: "ToNearby",
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-4",
        //            text: "附近"
        //        }]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "80px",
        //        style: "background-color: #ffffff; border-bottom-width:1px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "button",
        //            width: document.body.clientWidth / 4,
        //            id: "pOnline",
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-5",
        //            text: "点菜"
        //        }, {
        //            xtype: "button",
        //            id: "ToCoupon",
        //            width: document.body.clientWidth / 4,
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-6",
        //            text: "聚优惠"
        //        }, {
        //            xtype: "button",
        //            id: "ToCoupon1",
        //            width: document.body.clientWidth / 4,
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-7",
        //            text: "聚优惠"
        //        }, {
        //            xtype: "button",
        //            width: document.body.clientWidth / 4,
        //            id: "ToNearby",
        //            iconAlign: "top",
        //            style: "float:left;",
        //            iconCls: "i-shop-main-8",
        //            text: "附近"
        //        }]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "10px",
        //        style: "background-color: #E5E5E5;"
        //    },
        //    {
        //        xtype: "panel",
        //        style: "background-color: #ffffff;padding-top:5px;padding-bottom:5px;",
        //        //height: "150px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "panel",
        //            width: document.body.clientWidth * 0.4,
        //            height: "100px",
        //            style: "float:left;padding-left:20px;",
        //            html: "<img style='width:92px;height:96px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_1.png'/><div><p style='padding-left:10px;'>新款连衣裙</p><p style='padding-left:10px;font-size: 12px;color: #999;'>秋季海量新品</p></div>",
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            //xtype: "panel",
        //            //width: document.body.clientWidth * 0.6,
        //            items: [{
        //                xtype: "panel",
        //                width: document.body.clientWidth * 0.6,
        //                style: "float:left;",
        //                html: "<div style='float:left;padding-left:20px;'><p>新款长袖衬衫</p><p style='font-size: 12px;color: #999;'>街头潮男最爱</p></div><img style='width:auto;height:45px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_2.png'/>"
        //            }, {
        //                xtype: "panel",
        //                height: "1px",
        //                width: document.body.clientWidth * 0.6 - 5,
        //                style: "background-color:#E5E5E5;",
        //            }, {
        //                xtype: "panel",
        //                style: "background-color: #ffffff;",
        //                layout: "hbox",
        //                //height: "100px",
        //                items: [{
        //                    xtype: "panel",
        //                    width: document.body.clientWidth * 0.3,
        //                    style: "float:left;padding-top:5px;",
        //                    html: "<img style='padding-left:20px;width:80px;height:60px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_3.png'/><p style='padding-left:20px'>针织衫</p>"
        //                }, {
        //                    xtype: "panel",
        //                    height: "86px",
        //                    width: "1px",
        //                    style: "float:left;background-color: #E5E5E5;",
        //                }, {
        //                    xtype: "panel",
        //                    width: document.body.clientWidth * 0.3,
        //                    style: "float:left; padding-top:5px;",
        //                    html: "<img style='padding-left:10px;width:80px;height:60px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_4.png'/><p style='padding-left:20px'>长袖T恤</p>"
        //                }]
        //            }
        //            ]
        //        }]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "10px",
        //        style: "background-color: #E5E5E5;"
        //    }, {
        //        xtype: "panel",
        //        height: "30px",
        //        style: "background-color: #ffffff; padding-top:5px;",
        //        html: "<div><div style='float:left;padding-left:10px;'>热卖精品</div><div style='float:right;padding-right:10px;'>更多</div></div>",
        //    },
        //    {
        //        xtype: "panel",
        //        height: "1px",
        //        style: "background-color: #E5E5E5;"
        //    },
        //    {
        //        xtype: "panel",
        //        style: "background-color: #ffffff;",
        //        //height: "150px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "panel",
        //            width: document.body.clientWidth * 2 / 3,
        //            style: "float:left;padding-left:10px;padding-top:5px;padding-bottom:5px;",
        //            html: "<img style='width:190px;height:90px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_5.png'/><div><p style='padding-left:10px;font-size: 12px;color: #999;'>煮粥/煲汤/炖甜品</p></div>",
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;padding-top:5px;padding-bottom:5px;",
        //            html: "<img style='padding-left:20px;width:80px;height:60px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_6.png'/><div><p style='padding-left:20px;font-size: 12px;color: #999;'>新款高跟鞋</p></div>"

        //        }
        //        ]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "1px",
        //        style: "background-color: #E5E5E5;"
        //    }, {
        //        xtype: "panel",
        //        style: "background-color: #ffffff;",
        //        //height: "150px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            height: "100px",
        //            style: "float:left;padding-left:10px;",
        //            html: "<div><p style='padding-left:20px;font-size: 12px;color: #999;'>杯子</p></div><img style='width:92px;height:80px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_9.png'/>",
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>全家总动员</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_7.png'/>"
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>阳澄湖肥蟹</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_8.png'/>"
        //        }]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "1px",
        //        style: "background-color: #E5E5E5;"
        //    }, {
        //        xtype: "panel",
        //        style: "background-color: #ffffff;",
        //        //height: "150px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            height: "100px",
        //            style: "float:left;padding-left:10px;",
        //            html: "<div><p style='padding-left:10px;font-size: 12px;color: #999;'>万能自生精华</p></div><img style='width:92px;height:80px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_10.png'/>",
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            //xtype: "panel",
        //            //width: document.body.clientWidth * 0.6,
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>新包上市</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_11.png'/>"
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>休闲鞋</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_12.png'/>"
        //        }]
        //    },
        //    {
        //        xtype: "panel",
        //        height: "1px",
        //        style: "background-color: #E5E5E5;"
        //    }, {
        //        xtype: "panel",
        //        style: "background-color: #ffffff;",
        //        //height: "150px",
        //        cls: "i-main-home",
        //        layout: "hbox",
        //        items: [{
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            height: "100px",
        //            style: "float:left;padding-left:10px;",
        //            html: "<div><p style='padding-left:10px;font-size: 12px;color: #999;'>时尚女装</p></div><img style='width:92px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_13.png'/>",
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            //xtype: "panel",
        //            //width: document.body.clientWidth * 0.6,
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>时尚男装</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_14.png'/>"
        //        }, {
        //            xtype: "panel",
        //            width: "1px",
        //            style: "float:left;background-color: #E5E5E5;",
        //        }, {
        //            xtype: "panel",
        //            width: document.body.clientWidth / 3,
        //            style: "float:left;",
        //            html: "<div style='float:left;padding-left:10px;'><p style='font-size: 12px;color: #999;'>车品户外</p></div><img style='width:90px;height:80px;padding-left:10px;' src='" + config.webSite + "Upload/Mobile/shop/main/icon_home_rec_15.png'/>"
        //        }]
        //    //},
        //    //{
        //        //xtype: "panel",
        //        //height: "10px",
        //        //style: "background-color: #E5E5E5;"
        //        //},{
        //        //    xtype: 'panel',
        //        //    style: "background-color:#ffffff",
        //        //    disabled: true,
        //        //    items: [
        //        //        {
        //        //            xtype: "panel",
        //        //            layout: "hbox",
        //        //            id: "AddGroupDinnerPanl",
        //        //            //hidden: true,
        //        //            cls: "g-info-price-button clear",
        //        //            items: [{
        //        //                xtype: "img",
        //        //                id: "GDDHPrice",
        //        //                html: "￥180<u>￥359</u>",
        //        //                height: "36px", width: (document.body.clientWidth - 30) * 0.7,
        //        //                cls: "g-info-price"
        //        //            }, {
        //        //                xtype: "button",
        //        //                html: "参团",
        //        //                id: "AddGroupDinner",
        //        //                height: "36px",
        //        //                width: (document.body.clientWidth - 30) * 0.3,
        //        //                cls: "i-button"
        //        //            }]
        //        //        },
        //        //    ]
        //        //}, {
        //        //    xtype: 'simpleList',
        //        //    id: 'favoirteId',
        //        //    cls: 'list',
        //        //    height: 200,
        //        //    plugins: ['refreshFn', 'listpaging'],
        //        //    itemTpl:
        //        //    new Ext.XTemplate(
        //        //     '<div class="bh">',
        //        //         '<div class="bv">',
        //        //             '<div class="listTitle">{title}</div>',
        //        //             '<div class="listSummary">{summary}</div>',
        //        //             '<div class="listCommentDate">{publish_date}</div>',
        //        //             '<div class="listCommentIcon"><img src="resources/images/commentIcon.png" width="15" height="15"></div>',
        //        //              '<div class="listComment">{count}</div>',
        //        //         '</div>',
        //        //     '</div>'),
        //        //    store: 'news'
        //    }]
        //}],
    }
});