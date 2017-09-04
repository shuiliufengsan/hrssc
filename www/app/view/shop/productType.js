Ext.define('ChuangCai.view.shop.ProductType', {
    alternateClassName: 'productType',
    extend: 'Ext.List',
    xtype: 'productType',
    //requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        title: '拍品分类',
        cls: 'list',
        id: 'productTypeId',
        clear: 0,
        //plugins: ['refreshFn', 'listpaging'],
        style: "background-color: #ffffff",
        otherMenu: 'bottomBar',
        pressedCls: "personalCeter-pressing",
        itemTpl: new Ext.XTemplate(
            '<div class="e-box clear">',
            '<tpl>',
                '<tpl if="name">', "<div style='float:left;padding-top:5px;margin-left: 15px;'><img style='width:32px;height:32px;border-radius:50%;overflow:hidden;' src='resources/images/license.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;'>{name}</p></div>",
                "<tpl else>", "<p>这家伙很懒,什么都没有留下~~~~</p>", "</tpl>",
                "</div>",
            "</div>"),
        store: 'productType'
    }
});