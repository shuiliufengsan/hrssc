Ext.define('ChuangCai.view.shop.ImageViewDetail', {
    alternateClassName: 'imageViewDetail',
    extend: 'Ext.Panel',
    xtype: 'imageViewDetail',
    requires: ['ux.ImgView', 'Ext.Carousel'],
    config: {
        title: '标的物图片',
        id: 'imageViewDetailId',
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