Ext.define('ChuangCai.view.shop.ShopHomeNews', {
    alternateClassName: 'shopHomeNews',
    extend: 'Ext.DataView',
    xtype: 'shopHomeNews',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        style: "background-color:#ffffff;",
        id: 'shopHomeNewsId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: '新闻',
        infinite: true,
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate(
              '<div class="productHome-box clear" fire="">',
              '<div class="productHome-rest clear">',
              '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
              '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px">',
              '<h2>{title}</h2>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">当前价:<b>￥{current_price}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>{visticounts}</b>人关注</p>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">起拍价:&nbsp;￥{startprice}&nbsp;&nbsp;评估价:&nbsp;￥{evaluateprice}</p>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">保证金:&nbsp;￥{deposit}&nbsp;&nbsp;加价幅度:&nbsp;￥{increaseprice}</p>',
              '</div>',
              "</div>",
              "</div>"),
        store: 'ShopHomeNews',

    }
});