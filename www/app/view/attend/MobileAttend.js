Ext.define('ChuangCai.view.attend.MobileAttend', {
    extend: 'Ext.Container',
    alternateClassName: 'MobileAttend',
    xtype: 'MobileAttend',
    requires: [
        'Ext.TitleBar',
        'ux.BMap'
    ],
    config: {
        id: 'MobileAttend',
        layout: 'fit',
        title: '移动考勤',
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
                        xtype:'toolbar',                                       //  bottom toolbar  
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
                        id: 'MobileAttendMap',
                        height: document.body.clientHeight,
                        width: document.body.clientWidth,
                        margin: '-63 0 0 -18',
                        mapOptions: {
                            locate: true,
                            markers: [{ lng: '120.404', lat: '31.915', options: '天安门' }, { lng: '116.1', lat: '39.915', options: '地安门' }]
                        },
                        center: { lng: '120.63427813138', lat: '31.270866574018' },
                        //是否监听标点的点击事件
                        markerTap: true,
                        //私有变量，定位按钮
                        locate: null,
                        ak: '7ccqRjIRUlcG3t5pxrDEbxs6'
                }]
            }],
        listeners: {
            activate: function () {
                //Ext.getCmp("MobileAttendMap").initMap();
                Ext.getCmp("MobileAttendMap").setGeo(true);
                //var poi = Ext.getCmp("MobileAttendMap").nearData;
                //util.showMessage(poi.address, true);
            },
        }
    }
});
