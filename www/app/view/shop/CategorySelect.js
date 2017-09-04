Ext.define('ChuangCai.view.shop.CategorySelect', {
    alternateClassName: 'categorySelect',
    extend: 'ux.SimpleList',
    xtype: 'categorySelect',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'categorySelectId',
        plugins: ['refreshFn', 'listpaging'],
        title: '分类选择',
        //locales: {
        //    title: 'home.title'
        //},
        pressedCls: "personalCeter-pressing",
        itemTpl: new Ext.XTemplate(
        '<div class="bh1">',
            '<div class="bv">',
                '<div class="listTitle">{name}</div>',
            '</div>',
        '</div>'),
        store: 'categorySelect'
    }
});