Ext.define('ChuangCai.view.shop.MyFootPrint', {
    alternateClassName: 'myFootPrint',
    extend: 'ux.SimpleList',
    xtype: 'myFootPrint',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        cls: "product-list list",
        //onItemDisclosure: true,
        //limit:5,
        id: 'myFootPrintId',
        plugins: ['refreshFn', 'listpaging'],
        title: '我的足迹',
        scrollable: {
            direction: "vertical",
            directionLock: true
        },
        itemTpl: new Ext.XTemplate(
            '<div class="footPrint-box clear" fire="">',
            '<div class="footPrint-rest clear">',
            '<div class="footPrint-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
            '<div class="footPrint-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px;position:relative;"><h2>{productname}</h2><span style="width: 68%;" class="product-price">当前价:￥{current_price}</br><span style=" font-size: 12px;height: 20px;color: #999;">起拍价:￥{startprice}</span></br><span style=" font-size: 12px;height: 20px;color: #999;">浏览时间:{visit_datetime}</span></span>',
            '<div class="search-item">',
            '<div class="action delete x-button">删除</div>',
            '</div>',
            '</div>',
            '<div style="display:none">{id}</div>',
            "</div>",
            "</div>"),
        store: 'footPrint'
    }
});