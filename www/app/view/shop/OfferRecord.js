Ext.define('ChuangCai.view.shop.OfferRecord', {
    alternateClassName: 'offerRecord',
    extend: 'ux.SimpleList',
    xtype: 'offerRecord',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        cls: "product-list list",
        //onItemDisclosure: true,
        //limit:5,
        id: 'offerRecordId',
        plugins: ['refreshFn', 'listpaging'],
        title: '出价记录',
        scrollable: {
            direction: "vertical",
            directionLock: true
        },
        items: [{
            xtype: "panel",
            style: "background-color: #ffffff;border-bottom:1px solid #ebe7e4;padding-top:5px;",
            layout: "hbox",
            height: "30px",
            docked: 'top',
            items: [{
                xtype: "panel",
                width: document.body.clientWidth *2/ 9,
                html: "<div style='float:left;padding-left:12px;'><p style='float:right;color: #6B6B6B;'>状态</p></div>"
            }, {
                xtype: "panel",
                width: document.body.clientWidth * 2 / 9,
                html: "<div style='float:left;'><p style='float:right;color: #6B6B6B;'>竞买号</p></div>"
            }, {
                xtype: "panel",
                width: document.body.clientWidth * 2 / 9,
                style: "float:left;",
                html: "<div style='float:left;'><p style='color: #6B6B6B;'>价格</p></div>"
            }, {
                xtype: "panel",
                width: document.body.clientWidth / 3,
                style: "float:left;",
                html: "<div style='float:left;padding-left:10px;'><p style='float:right;padding-right:12px;color: #6B6B6B;'>时间</p></div>"
            }]
        }],
        itemTpl: new Ext.XTemplate(
            '<div class="offerRecord-box clear" fire="">',
            '<div class="offerRecord-rest clear">',
            //'<div class="offerRecord-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px;position:relative;"><h2></h2><span class="offerRecord-offer-no"></span><u class="marketprice"></u><u class="marketprice"></u>',
            '<div>',
            '<div style="float:left;width:21%;"><p class="offerRecord-{offer_status}">&nbsp;</p></div>',
            '<div style="float:left;width:23%;"><p style="font-size: 12px;color:#999;">{offer_no}</p></div>',
            '<div style="float:left;width:22%;"><p style="font-size: 12px;color:#999;">{offer_price}</p></div>',
            '<div style="float:right;"><p style="font-size: 12px;color:#999;">{created_date}</p></div>',
            '</div>',
            "</div>",
            "</div>"),
        store: 'offerRecordId'
    }
});