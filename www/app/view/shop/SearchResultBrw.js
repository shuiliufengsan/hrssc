Ext.define('ChuangCai.view.shop.SearchResultBrw', {
    alternateClassName: 'searchResultBrw',
    //extend: 'ux.SimpleList',
    extend: 'Ext.DataView',
    xtype: 'searchResultBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        style: "background-color:#ffffff;",
        //onItemDisclosure: true,
        //limit:5,Ext.getCmp(name).setCls("m-select-field m-select-field-active");
        id: 'searchResultBrwId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: '搜索结果',
        //fullscreen: true,
        infinite: true,
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate(
              '<div class="productHome-box clear" fire="">',
              '<div class="productHome-rest clear">',
              '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
              '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px"><h2>{productname}</h2><span class="productHome-price">￥{current_price}&nbsp;&nbsp;&nbsp;&nbsp;<u class="marketprice">￥{current_price}</u></span></br><p><b>{visticounts}</b>人关注&nbsp;&nbsp;运费:<b class="homeProList-jp">￥5</b></br>{regionid}</p></div>',
              "</div>",
              "</div>"),
        store: 'productList',
    }
});