Ext.define('ChuangCai.view.Main', {
    alternateClassName: 'main',
    extend: 'ux.NavigationView',
    requires: ['ChuangCai.view.park.ParkHome', 'ChuangCai.view.BottomBar'],
    xtype: 'main',
    config: {
        cls: 'cardPanel',
        navigationBar: {
            backButton: {
                iconCls: 'arrow_left',
                ui: '',
                cls: 'back'
            }
        },
        items: [{ xtype: 'parkHome' }]
    }
});
