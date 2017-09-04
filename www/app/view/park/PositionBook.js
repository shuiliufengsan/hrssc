Ext.define('ChuangCai.view.park.PositionBook', {
    alternateClassName: 'positionBook',
    extend: 'Ext.DataView',
    xtype: 'positionBook',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList'],
    config: {
        style: "background-color:#E5E5E5;",
        id: 'positionBookId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: '车位预约',
        infinite: true,
        items: [
             {
                 xtype: "panel",
                 layout: "hbox",
                 height: "35px",
                 docked: 'top',
                 items: [{
                     xtype: "button",
                     id: "myBookId",
                     text: "我的预约",
                     width: document.body.clientWidth / 2,
                     cls: "massage-tab massage-tab-first massage-tab-active",
                     pressedCls: "i-massageView-pressing"
                 }, {
                     xtype: "button",
                     id: "placeBookId",
                     text: "周边预约",
                     width: document.body.clientWidth / 2,
                     cls: "massage-tab",
                     pressedCls: "i-massageView-pressing"
                 }, {
                     xtype: "textfield",
                     hidden: true,
                     id: "orderFlag"
                 }]
             },
        ],
        itemTpl: new Ext.XTemplate(
            '<div style="background-color:#E5E5E5;height:10px;"></div>',
             '</div>',
              '<div class="productHome-rest clear">',
            //  '<div class="parkAdv"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
             '<div class="parkAdv"><img src="' + config.webSite + 'Upload/attached/image/Baopai/5.jpg" width="110" height="75" alt=""></div>',
              '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px">',
              '<h2>{park_name}</h2>',
               '<p style=" font-size: 12px;height: 10px;color: #999;"></p>',
              '<p style=" font-size: 12px;height: 40px;color: #999;">{address}</p>',           
            //  '<p style=" font-size: 12px;height: 20px;color: #999;" >{publish_date}</p>',
              '</div>',
              "</div>"),
        store: 'myOrder',
    }
});