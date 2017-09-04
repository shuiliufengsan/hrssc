Ext.define('ChuangCai.view.system.AboutDetail', {
    alternateClassName: 'aboutDetailBrw',
    extend: 'ux.SimpleList',
    xtype: 'aboutDetailBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.NewsView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'aboutDetailBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '关于保拍',
        locales: {
            title: 'home.title'
        },
        html: "<p style='text-align:center;'>关于保拍</p><p></p>",
    }
});