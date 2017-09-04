Ext.define('ChuangCai.view.supervise.QrCodeBorrowBrw', {
    alternateClassName: 'qrCodeBorrowBrw',
    extend: 'ux.SimpleList',
    xtype: 'qrCodeBorrowBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'qrCodeBorrowBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '二维码扫描',
        locales: {
            title: 'home.title'
        },
        items: [{
            xtype: "panel",
            layout: "hbox",
            height: "50px",
            docked: 'top',
            ui: "uuchina",
            id: "DGOrCoupon",
            style:"padding-top:15px;",
            items: [{
                xtype: "button",
                id: "patrolBrwNewId",
                text: "借车",
                width: "33.3%",
                cls: "i-button"
            }]
        }]
    }
});