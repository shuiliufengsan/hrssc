Ext.define('ChuangCai.view.shop.Ovetlay', {
    alternateClassName: 'oveylay',
    extend: 'Ext.Panel',
    xtype: 'overlay',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'Ext.plugin.DataViewPaging', 'ux.SimpleList', 'ChuangCai.util', 'ChuangCai.view.shop.GoodsType'],
   
    config: {
        style: "background-color:#ffffff;",
        id: 'overlayId',

        
        left: 0,
        top: 0,

        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,

        // Make it hidden by default
        hidden: true,

        // Set the width and height of the panel
        //width: isPhone ? 260 : 400,
        //height: isPhone ? '70%' : 400,
        width: 230,
        height:'70%',

        // Here we specify the #id of the element we created in `index.html`
        contentEl: 'goodsTypeId',

        // Style the content and make it scrollable
        styleHtmlContent: true,
        scrollable: true,

        // Insert a title docked at the top with a title
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Overlay Title'
            },
            {
                docked: 'top',
                xtype: 'button',
                text: 'Overlay'
            }
        ]
    }
});