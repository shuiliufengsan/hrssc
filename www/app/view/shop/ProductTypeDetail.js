Ext.define('ChuangCai.view.shop.ProductTypeDetail', {
    alternateClassName: 'productTypeDetail',
    extend: 'ux.SimpleList',
    xtype: 'productTypeDetail',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        id: 'productTypeDetailId',
        //plugins: ['refreshFn', 'listpaging'],
        title: '分类详情',
        style: "background-color:#fff",
        //store: 'categorySelect'.
    }
});