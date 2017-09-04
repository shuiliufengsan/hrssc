Ext.define('ChuangCai.view.shop.ProductVideo', {
    alternateClassName: 'productVideo',
    extend: 'Ext.Container',
    xtype: 'productVideo',
    //requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'productVideoId',
        title: '视频内容',
      //  plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
            //    
            }
        },
        items: [{
                xtype: 'panel',
                id: 'employeeCodeId',
                width: '320',
                layout: 'fit',
                height: '240'
            }, {
                xtype: "button",
                id: "myBinddingPro",
                height: 50,
                cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:5px;'><img src='resources/images/offer-record.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>点击播放</p></div>",
                listeners: {
                    tap: function () {
                       
                    }
                }
            }]
    }
});