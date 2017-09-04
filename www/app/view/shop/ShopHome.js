Ext.define('ChuangCai.view.shop.ShopHome', {
    alternateClassName: 'shopHome',
    extend: 'Ext.Panel',
    xtype: 'shopHome',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel", 'ChuangCai.view.shop.SearchBrw', 'ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        id: 'homeId',
        title: '停车场',
        style: "background-color:  #E5E5E5",
        scrollable: false,
        otherMenu: 'bottomBar',
        clear: 0,
        cls: 'i-main-home',
        //  title: '<p style="text-align:center;font-size: 14px;color: #FFFFFF;">搜索宝贝</p>',
        plugins: 'conHref',
        items: [{
            xtype: "panel",
            layout: "vbox",
            id: "RestaurantDetailHide",
            items: [{
                xtype: "panel",
                id: "RCarouselis",
                //hidden: true,
                height: document.body.clientWidth/2,
                items: [{
                    xtype: "RCarousel",
                    id: "RCarouselis1",
                    height: document.body.clientWidth/2,
                }]
            }, {
                xtype: "panel",
                style: "background-color:  #E5E5E5",
                height: "10px"
            },  {
                xtype: "panel",
                height: "100px",
                style: "background-color: #ffffff; border-bottom-width:1px;",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "button",
                    width: document.body.clientWidth / 2,
                    id: "findPlace",
                    iconAlign: "top",
                    style: "float:left;",
                    iconCls: "i-shop-main-5",
                    text: "找车位"
                }, {
                    xtype: "button",
                    id: "goodsType",
                    width: document.body.clientWidth / 2,
                    iconAlign: "top",
                    style: "float:left;",
                    iconCls: "i-shop-main-6",
                    text: "车位预约"
                }]
            },
            {
                xtype: "panel",
                height: "100px",
                style: "background-color: #ffffff; border-bottom-width:1px",
                cls: "i-main-home",
                layout: "hbox",
                items: [{
                    xtype: "button",
                    id: 'parkAdv',
                    width: document.body.clientWidth / 2,
                    iconAlign: "top",
                    style: "float:left; border-bottom-width: thin;",
                    iconCls: "i-shop-main-7",
                    text: "停车专题"
                }, {
                    xtype: "button",
                    width: document.body.clientWidth / 2,
                    id: "payFees",
                    iconAlign: "top",
                    style: "float:left; border-bottom-width: thin;",
                    iconCls: "i-shop-main-8",
                    text: "我要缴费"
                }]
            }]
        }]
    }
});