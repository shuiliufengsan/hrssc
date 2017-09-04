Ext.define('ChuangCai.view.system.About', {
    alternateClassName: 'aboutBrw',
    extend: 'ux.SimpleList',
    xtype: 'aboutBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList', 'ChuangCai.view.system.NewsView'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'aboutBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '关于保拍',
        locales: {
            title: 'home.title'
        },

        items: [{
            html: "<p style='text-align:center;'>放logo位置</p><p></p>",
        }, {
            xtype: 'panel',
            disabled: true,
            items: [{
                xtype: "panel",
                layout: "vbox",
                items: [{
                    xtype: "button",
                    style: "background-color: #ffffff",
                    id: "serviceTermsDetail",
                    height: 50,
                    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                    html: "<div style='float:left;padding-top:5px;'><img style='width:30px;height:30px;border-radius:50%;overflow:hidden;' src='" + config.webSite + "Upload/Mobile/shop/main/service_term_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>服务条款</p></div>"
                }, {
                    xtype: "button",
                    style: "background-color: #ffffff",
                    id: "aboutBaoPaiDetail",
                    height: 50,
                    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                    html: "<div style='float:left;padding-top:5px;'><img style='width:30px;height:30px;' src='" + config.webSite + "Upload/Mobile/shop/main/about_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>关于保拍</p></div>"
                }, {
                    xtype: "button",
                    style: "background-color: #ffffff",
                    id: "welcomePage",
                    height: 50,
                    cls: "g-info-hd x-button-no g-info-hd-nobd x-button-no-padding",
                    html: "<div style='float:left;padding-top:5px;'><img style='width:30px;height:30px;border-radius:50%;overflow:hidden;' src='" + config.webSite + "Upload/Mobile/shop/main/welcome_icon.png'/></div><div style='float:left;padding-top:10px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>欢迎页</p></div>"
                }]
            }]
        }]
    }
});