Ext.define('ChuangCai.view.shop.ProductListDetail', {
    alternateClassName: 'productListDetail',
    extend: 'ux.SimpleList',
    xtype: 'productListDetail',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        id: 'productListDetailId',
        plugins: ['refreshFn', 'listpaging'],
        title: '标的物介绍',
        locales: {
            title: 'home.title'
        },
        items: [{
            xtype: "panel",
            layout: "hbox",
            height: "35px",
            docked: 'top',
            items: [{
                xtype: "button",
                id: "subjectMatterIntroduceId",
                text: "标的物介绍",
                width: document.body.clientWidth / 3,
                cls: "detail-tab detail-tab-first detail-tab-active",
                pressedCls: "detail-pressing-cls"
            },{
               xtype: "button",
               id: "biddingInstructionsId",
               text: "竞价细则",
               width: document.body.clientWidth / 3,
               cls: "detail-tab",
               pressedCls: "detail-pressing-cls"
           },{
               xtype: "button",
               id: "biddingAnnouncementId",
               text: "联系方式",
               width: document.body.clientWidth / 3,
               cls: "detail-tab",
               pressedCls: "detail-pressing-cls"
           }]
        }, {
            xtype: "panel",
            width: document.body.clientWidth - 10,
            style: "padding-left:10px;font-size: 12px !important;",
            id: "subjectMatterIntroduceContentId",
        }, {
            xtype: "panel",
            hidden: true,
            width: document.body.clientWidth - 20,
            style: "padding-left:10px;font-size: 14px !important;",
            id: "biddingInstructionsContentId",
        }, {
            xtype: "panel",
            hidden: true,
            width: document.body.clientWidth - 20,
            style: "padding-left:10px;font-size: 14px;",
            id: "biddingAnnouncementContentId",
        }]
    }
});