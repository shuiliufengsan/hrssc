Ext.define('ChuangCai.view.shop.VoucherImage', {
    alternateClassName: 'voucherImage',
    extend: 'Ext.Panel',
    xtype: 'voucherImage',
    requires: ['ux.ImgView', 'Ext.Carousel'],
    config: {
        title: '凭证图片',
        id: 'voucherImageId',
        fullscreen: true,
        items: [{
            layout: 'fit',
            height: '100%',
            width: '100%',
            xtype: 'panel',
            items: [{
                xtype: 'xcarousel',
                itemConfig: {
                    width: '100%'
                },
                id: "loadImage",
                displayCount: 1,
                bufferSize: 1,
            }]
        }]
    }
});