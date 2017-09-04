Ext.define('ChuangCai.view.system.ServiceTerms', {
    alternateClassName: 'serviceTermsBrw',
    extend: 'ux.SimpleList',
    xtype: 'serviceTermsBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.NewsView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'serviceTermsBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '关于保拍',
        locales: {
            title: 'home.title'
        },
        html: "<p style='text-align:left;padding:15px;'>始终坚持“诚信、专业”为企业根基，秉承“服务、严谨”的职业操守， 依托雄厚的专家队伍和遍及海内外的客户资源，开拓进取、不断创新。</p><p></p>",
    }
});