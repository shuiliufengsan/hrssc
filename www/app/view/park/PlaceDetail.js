Ext.define('ChuangCai.view.park.PlaceDetail', {
    alternateClassName: 'placeDetail',
    extend: "Ext.Panel",
    xtype: "placeDetail",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel"],
    config: {
        id: 'placeDetailId',
        title: '停车场详情',
        plugins: 'conHref',
        style: "background-color: #ffffff",
        items: [{
            xtype: "panel",
            height: document.body.clientWidth / 2,
            items: [{
                xtype: "RCarousel",
                id: "PlaceImgView",
                height: document.body.clientWidth / 2,
            }]

        }, {
            xtype: "panel",
            style: "background-color: #ffffff",
            height: "0px"
        }, {
            xtype: "panel",
            layout: "hbox",
            height: '50px',
            style: "border-top:1px solid #EDEDED;padding-top:2px;",
            items: [{
                xtype: "panel",
                id: "placeName",
                width: document.body.clientWidth * 0.65,
                style: "float:left;",
                html: "<p style='font-size: 14px;color: #999;margin-left: 10px;margin-top: 5px;'>停车场1</br>车位数：200</p>"
            }, {
                xtype: 'button',
                id: "immediateNavi",
                width: document.body.clientWidth * 0.3,
                height: '30px',
                style: "margin-top: 8px;float:right;",
                html: "<p style='color:red'>立即导航</p>",
            }]
        }, {
            xtype: "panel",
            style: "background-color: #ffffff",
            height: "5px"

        }, {
            xtype: "panel",
            height: "1px",
            style: "background-color: #E5E5E5;"
        },
        {
            xtype: "panel",
            layout: "hbox",
            height: '50px',
            cls: 'i-login',
            style: "padding-top:2px;",
            items: [{
                xtype: "panel",
                id: "placeAddress",
                width: document.body.clientWidth * 0.8,
                style: "float:left;",
                html: "<p style='font-size: 14px;color: #999;margin-left: 10px;margin-top: 10px;'>地址：武汉市园区东华门大街</p>"
            }, {
                xtype: "button",
                id: "collectionPlace",
                //   width: document.body.clientWidth / 6,
                style: "text-align:right",
                html: "<img style='width:20px;height:20px;' src='resources/images/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>收藏</p>"
                //},{
                //    xtype: "button",
                //    id: "sharePlace",
                //    width: document.body.clientWidth / 6,
                //    style: "text-align:center",
                //    html: "<img style='width:20px;height:20px;' src='resources/images/collection.png'/><p style='text-align:center;font-size: 12px;color: #999;'>分享</p>"
            }]
        }, {
            xtype: "panel",
            style: "background-color: #ffffff;padding-top:0px;",
            id: "priceStandard",
            height: "25px",
            html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>收费标准：5.0/小时</p>"
        }, {
            xtype: "panel",
            height: "1px",
            style: "background-color: #E5E5E5;"
        },
        {
            xtype: "panel",
            style: "background-color: #ffffff;padding-top:5px;",
            id: "workTime",
            height: "25px",
            html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>营业时间：全天</p>"
        }, {
            xtype: "panel",
            style: "background-color: #ffffff;padding-top:0px;",
            id: "tel",
            height: "25px",
            html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>联系电话：</p>"
        }, {
            xtype: "panel",
            height: "1px",
            style: "background-color: #E5E5E5;"
        },
         {
             xtype: "panel",
             style: "background-color: #ffffff;padding-top:5px;",
             id: "shareWay",
             height: "25px",
           //  html: "<p style='padding-left:10px;font-size: 14px;color: #999;'>分享至：</p>"
         },
         {
             xtype: "textfield",
             height: "10px",
             hidden: true,
             id: "loadParkId"
             //传id控件
         }, {
             xtype: "textfield",
             height: "10px",
             hidden: true,
             id: "loadCollectionId"
             //传收藏标记控件
         },
        {
            xtype: "panel",
            docked: 'bottom',
            layout: "hbox",
            //style: "border-top:1px solid #EDEDED;",
            items: [{
                xtype: 'button',
                id: "orderPlace",
                width: document.body.clientWidth,
                height: '40px',
                cls: "productView-tab",
                pressedCls: "i-productView-pressing",
                html: "<p style='color:#fff'>预约车位</p>",
            }]
        }]
    }
});