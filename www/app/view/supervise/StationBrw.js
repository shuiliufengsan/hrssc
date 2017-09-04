Ext.define('ChuangCai.view.supervise.StationBrw', {
    alternateClassName: 'stationBrw',
    extend: 'ux.SimpleList',
    xtype: 'stationBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'stationBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '站点信息',
        locales: {
            title: 'home.title'
        },
        itemTpl: new Ext.XTemplate(
        '<div class="bh">',
            //'<div class="img" style="background-image: url(resources/images/weather/n53.gif);"></div>',
            '<div class="bv">',
                '<div class="listTitle">{station_name}</div>',
                '<div class="listSummary">{station_address}</div>',
                '<div class="listPublishDate">{station_status}</div>',
            '</div>',
        '</div>'),
        store: 'station'
    }
});