Ext.define('ChuangCai.view.list.Used', {
    alternateClassName: 'listUsed',
    extend: 'ux.SimpleList',
    xtype: 'listUsed',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        onItemDisclosure: true,
        plugins: ['refreshFn', 'listpaging'],
        //        title: '公司新闻',
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate('{name}'),
        //        itemTpl: new Ext.XTemplate(
        //        '<div class="bh">',
        //            '<div class="img" style="background-image: url(resources/images/weather/n20.gif);"></div>',
        //            '<div class="bv">',
        //                '<div class="content">{name}</div>',
        //                '<div class="content">{content}</div>',
        //            '</div>',
        //        '</div>'),
        store: 'usedList'
    }
});