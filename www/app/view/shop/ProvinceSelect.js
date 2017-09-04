Ext.define('ChuangCai.view.shop.ProvinceSelect', {
    alternateClassName: 'provinceSelect',
    extend: 'ux.SimpleList',
    xtype: 'provinceSelect',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'provinceSelectId',
        plugins: ['refreshFn', 'listpaging'],
        title: '选择省份',
        //locales: {
        //    title: 'home.title'
        //},
        pressedCls: "personalCeter-pressing",
        itemTpl: new Ext.XTemplate(
        '<div class="bh1">',
            '<div class="bv">',
                '<div class="listTitle">{province_name_c}</div>',
            '</div>',
        '</div>'),
        store: 'provinceSelect'
    }
});