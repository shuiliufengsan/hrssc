Ext.define('ChuangCai.view.shop.GoodsType', {
    alternateClassName: 'goodsType',
    extend: 'Ext.DataView',
    xtype: 'goodsType',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList', 'ChuangCai.view.shop.ProductListView'],
    config: {
        style: "background-color:#ffffff;",
        id: 'goodsTypeId',
        plugins: ['refreshFn',{
            xclass: 'Ext.plugin.DataViewPaging',
            autoPaging: true
            }
        ],
        title: '商品类型',
        infinite: true,
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate(
            //'<div class="e-box clear">',
            //'<div>{remark},{typeName}</div>',
            //"</div>"),

            '<div class="e-box clear">',
           // '<div>{remark}，{title}</div>',
            '<tpl>',
                '<tpl if="typeName">', "<div style='float:left;padding-top:5px;margin-left: 15px;'><img style='width:32px;height:32px;border-radius:50%;overflow:hidden;' src='resources/images/license.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;'>{typeName}</p></div>",
                "<tpl else>", "<p>这家伙很懒,什么都没有留下~~~~</p>", "</tpl>",
                "</div>",
            "</div>"),
          store: 'GoodsType',

    }
});