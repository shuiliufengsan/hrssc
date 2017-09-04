Ext.define('ChuangCai.view.shop.ProductListBrw', {
    alternateClassName: 'productListBrw',
    //extend: 'ux.SimpleList',
    extend: 'Ext.DataView',
    xtype: 'productListBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        style: "background-color:#ffffff;",
        //onItemDisclosure: true,
        //limit:5,Ext.getCmp(name).setCls("m-select-field m-select-field-active");
        id: 'productListBrwId',
        plugins: [{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
        }],
        title: 'Product',
        //fullscreen: true,
        infinite: true,
        locales: {
            title: 'home.title'
        },
        items: [{
            xtype: "panel",
            id: "SFpanel",
            docked: 'top',
            height: "35px",
            width: document.body.clientWidth,
            cls: "x-border-bottom",
            style: "background-image: -webkit-linear-gradient(top, #ffffff,#f4f4f4);",
            layout: "hbox",
            items: [{
                xtype: "img",
                id: "regionSelect",
                html: "省份<span></span>",
                cls: "m-select-field",
                width: (document.body.clientWidth) * 0.285,
            }, {
                id: "regionSelectId",
                html: "0",
                hidden: true
            }, {
                xtype: "img",
                html: "分类<span></span>",
                id: "categorySelect",
                cls: "m-select-field",
                width: (document.body.clientWidth) * 0.285,
            }, {
                id: "categorySelectId",
                html: "0",
                hidden: true
            }, {
                xtype: "img",
                id: "sortingSelect",
                html: "排序<span></span>",
                cls: "m-select-field",
                width: (document.body.clientWidth) * 0.285,
            }, {
                id: "sortingSelectId",
                html: "0",
                hidden: true
            }, {
                xtype: "img",
                id: "productSearch",
                height: "35px",
                width: (document.body.clientWidth) * 0.145,
                style: 'background-image: url("resources/images/search.png");line-height:35px;background-repeat: no-repeat;background-size:auto auto;  background-position: center center'
            }]
        }, {
            xtype: "panel",
            layout: "hbox",
            id: "productSearchPanel",
            height: "35px",
            hidden: true,
            docked: 'top',
            style: "background-image: -webkit-linear-gradient(top, #ffffff,#f4f4f4);",
            width: "100%",
            items: [{
                xtype: 'img',
                height: '45px',
                width: '40px',
                cls: "i-search-icon"
            }, {
                xtype: 'textfield',
                id: 'SearchByName',
                height: '44px',
                margin: 0,
                cls: "i-search-text",
                clearIcon: false,
                placeHolder: "请输入查询条件",
                width: document.body.clientWidth - 80,
            }, {
                xtype: 'img',
                id: 'cancel_SearchByName_box',
                height: '45px',
                width: '40px',
                cls: "i-search-cancel-icon"
            }]
        }, {
            xtype: "panel",
            height: '5px'
        }],
        itemTpl: new Ext.XTemplate(
              '<div class="productHome-box clear" fire="">',
              '<div class="productHome-rest clear">',
              '<div class="productHome-rest-thumb"><img src="' + config.webSite + "Photos/Product/" + '{imageurl}" width="80" height="80" alt=""></div>',
              '<div class="productHome-rest-text" style="width:' + (document.body.clientWidth - 100 - 10 - 20) + 'px">',
              '<h2>{productname}</h2>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">当前价:<b>￥{current_price}</b>&nbsp;&nbsp;&nbsp;&nbsp;<b>{visticounts}</b>人关注</p>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">起拍价:&nbsp;￥{startprice}&nbsp;&nbsp;评估价:&nbsp;￥{evaluateprice}</p>',
              '<p style=" font-size: 12px;height: 20px;color: #999;">保证金:&nbsp;￥{deposit}&nbsp;&nbsp;加价幅度:&nbsp;￥{increaseprice}</p>',
              '</div>',
              "</div>",
              "</div>"),
        store: 'productList',

    }
});