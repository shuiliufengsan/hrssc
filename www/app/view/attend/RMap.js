Ext.define('ChuangCai.view.attend.RMap', {
    extend: "Ext.Panel",
    xtype: "RMap",
    config: {
        styleHtmlContent: true,
        scrollable: false,
        layout: "vbox",
        height: "100%",
        style: "padding:0px",
        items: [{
            xtype: "panel",
            layout: "hbox",
            height: "50px",
            cls: "s-header",
            items: [{
                xtype: "img",
                id: "RMapBackB",
                height: "50px",
                width: "50px",
                cls: "s-header-icon s-header-icon-back"
            },
            {
                html: "餐厅地图",
                xtype: "panel",
                width: document.body.clientWidth - 100,
                height: "50px",
                cls: "s-header-title"
            },
            {
                xtype: "img",
                id: "ToMyAssistant",
                height: "50px",
                width: "50px",
                cls: "s-header-icon s-header-icon-my"
            }]
        },
        {
            xtype: "img",
            width: document.body.clientWidth,
            height: (document.body.clientHeight - 50),
            id: "rStaticMap",
            style: "padding:0px",
            cls: "x-border-top m-img-background"
        }]
    }
});