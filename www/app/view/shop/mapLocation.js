//Ext.define('ChuangCai.view.shop.mapLocation', {
//    alternateClassName: 'mapLocation',
//    extend: 'ux.BMap',
////    extend: "Ext.Panel",
//    xtype: 'mapLocation',
//    requires: ['ux.BMap'],
//    config: {
//        title: '地图',
//        /// <summary>
//        /// 地图配置
//        /// </summary>
//        /// <param name="locate">是否加载定位控件</param>
//        mapOptions: {
//            locate: true
//        },
//        data: [{ lng: '116.404', lat: '39.915', name: '天安门' }, { lng: '116.1', lat: '39.915', name: '地安门' }],
//        //是否监听标点的点击事件
//        markerTap: true
//    },

//    initialize: function () {
//        console.log("daaaaaa");
//    },
//    //点击坐标处理
//    onTapMarker: function (me, marker) {
//        //创建信息窗口
//        var infoWindow = new BMap.InfoWindow(marker.options.name);
//        marker.openInfoWindow(infoWindow);
//    }
//});


Ext.define('ChuangCai.view.shop.mapLocation', {
    extend: 'Ext.Container',
    alternateClassName: 'mapLocation',
    xtype: 'mapLocation',
    requires: [
        'Ext.TitleBar',
        'ux.BMap'
    ],
    config: {
        id: 'mapLocationId',
        layout: 'fit',
        title: '地图',
        items: [
            {
                //iconCls: 'maps',
                styleHtmlContent: true,
                scrollable: false,
                layout: 'vbox',
                height: document.body.clientHeight,
                width: document.body.clientWidth,
                items: [
                    {
                        xtype: 'toolbar',                                       //  bottom toolbar  
                        docked: 'top',
                        cls: 'navToolbar',
                        height: '20px',
                        items: [{
                            xtype: 'selectfield',
                            id: 'nearCompanyId',
                            usePicker: false,
                            width: document.body.clientWidth,
                        }
                        //, {
                        //    xtype: 'image',
                        //    itemId: 'cancel_news_search_box',
                        //    height: '35px',
                        //    width: '40px',
                        //    cls: "i-search-cancel-icon"
                        //}
                        ]
                    },
                    {
                        xtype: "bMap",
                        id: 'MobileTextMap',
                        height: document.body.clientHeight,
                        width: document.body.clientWidth,
                        margin: '-63 0 0 -18',
                        mapOptions: {
                            locate: true,
                            markers: [{ lng: '120.404', lat: '31.915', options: '天安门' }, { lng: '116.1', lat: '39.915', options: '地安门' }]
                        },
                        center: { lng: '120.63427813138', lat: '31.270866574018' },
                        //center: '南京',

                        //是否监听标点的点击事件
                        markerTap: true,
                        //私有变量，定位按钮
                        locate: null,
                        ak: '7ccqRjIRUlcG3t5pxrDEbxs6'
                    }]
            }],
            initialize: function () {
                console.log("ddddddg");
            },
            //点击坐标处理
            onTapMarker: function (me, marker) {
                console.log("aaaaaaaaaaaaaaa");
                //创建信息窗口
                var infoWindow = new BMap.InfoWindow(marker.options.name);
                marker.openInfoWindow(infoWindow);
            },
        listeners: {
            activate: function () {
                //Ext.getCmp("MobileAttendMap").initMap();
                Ext.getCmp("MobileTextMap").setGeo(true);
                //var poi = Ext.getCmp("MobileAttendMap").nearData;
                //util.showMessage(poi.address, true);
            },
        }
    }
});
