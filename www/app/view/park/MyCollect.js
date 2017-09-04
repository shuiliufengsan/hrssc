Ext.define('ChuangCai.view.park.MyCollect', {
    alternateClassName: 'myCollect',
    extend: 'Ext.DataView',
    xtype: 'myCollect',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList'],
    config: {
        style: "background-color:#E5E5E5;",
        id: 'myCollectId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: '我的收藏',
        infinite: true,
        items: [
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
            //  '<p style=" font-size: 12px;height: 20px;color: #999;"></p>',
              '<p style=" font-size: 12px;height: 20px;color: #999;" >{publish_date}</p>',
              '</div>',
              "</div>"),
        store: 'myCollect',
    }
});