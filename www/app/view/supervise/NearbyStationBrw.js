Ext.define('ChuangCai.view.supervise.NearbyStationBrw', {
    alternateClassName: 'nearbyStationBrw',
    extend: 'ux.SimpleList',
    xtype: 'nearbyStationBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'nearbyStationBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '附近站点信息',
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
        store: 'nearbyStation'
    }
});