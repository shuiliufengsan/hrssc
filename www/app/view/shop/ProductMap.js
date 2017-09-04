Ext.define('ChuangCai.view.shop.ProductMap', {
    alternateClassName: 'productMap',
    extend: "Ext.Panel",
    xtype: "productMap",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', "ux.plugin.RCarousel", "ux.BMap"],
    config: {
        id: 'productMapId',
        layout: 'fit',
        title: '标的物所在地',
        items: [{
            //iconCls: 'maps',
            styleHtmlContent: true,
            scrollable: false,
            layout: 'vbox',
            height: document.body.clientHeight,
            width: document.body.clientWidth,
            items: [{
                xtype: "bMap",
                id: 'ProductMapArea',
                height: document.body.clientHeight,
                width: document.body.clientWidth,
                style: "padd-top:45px",
                margin: '-63 0 0 -18',
                mapOptions: {
                    locate: true,
                    markers: [{ lng: '120.635765', lat: '31.268128', options: '苏州' }]
                },
                //center: { lng: '120.63427813138', lat: '31.270866574018' },
                //是否监听标点的点击事件
                markerTap: true,
                //私有变量，定位按钮
                locate: null,
                ak: '0cvMlj16I4Q6TdAtvWcA85vk'
            }]
        }],
        listeners: {
            //activate: function () {
            //    //Ext.getCmp("MobileAttendMap").config.lng = 120.635765;
            //    Ext.getCmp("ProductMapArea").setLng(120.635765)
            //    //Ext.getCmp("MobileAttendMap").config.lat = 31.268128;
            //    Ext.getCmp("ProductMapArea").setLat(31.268128)
            //    Ext.getCmp("ProductMapArea").initMap();
            //    //Ext.getCmp("MobileAttendMap").setGeo(true);
            //    //var poi = Ext.getCmp("MobileAttendMap").nearData;
            //    //util.showMessage(poi.address, true);
            //},
            //activate: function () {
                
            //}
        }
    }
});