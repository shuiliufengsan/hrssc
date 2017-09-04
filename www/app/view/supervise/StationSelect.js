Ext.define('ChuangCai.view.supervise.StationSelect', {
    alternateClassName: 'stationSelect',
    extend: 'ux.SimpleList',
    xtype: 'stationSelect',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'stationSelectId',
        plugins: ['refreshFn', 'listpaging'],
        title: '站点选择',
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate(
        '<div class="bh1">',
            '<div class="bv">',
                '<div class="listTitle">{station_name}</div>',
            '</div>',
        '</div>'),
        store: 'station'
    }
});