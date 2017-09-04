Ext.define('ChuangCai.view.shop.MyPersonalPhotoSet', {
    alternateClassName: 'myPersonalPhotoSet',
    extend: "Ext.Panel",
    xtype: "myPersonalPhotoSet",
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        id: 'myPersonalPhotoSetId',
        title: '设置头像',
        plugins: 'conHref',
        style: "background-color: #F5F5F9;",
        items: [{
            xtype: "panel",
            layout: "vbox",
            height: document.body.clientHeight - 50,
            items: [{
                xtype: "panel",
                height: "30px",
            }, {
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth * 3 / 8,
                }, {
                    id: 'userPhoto0',
                    xtype: 'img',
                    width: document.body.clientWidth / 4,
                    height: document.body.clientWidth / 4,
                    //height: "50px",
                    style: 'background-repeat: repeat;margin-top:15px;border-radius:50%;overflow:hidden;',
                    src: 'resources/images/noface_60x60.jpg',
                }, {
                    xtype: "button",
                    hidden: true,
                    cls: "x-button-no-padding",
                    style: "background-color: #F5F5F9;",
                    html: "<div style='margin-right:10px;margin-top:5px;'><img style='width:80px;height:80px;border-radius:50%;overflow:hidden;' src='resources/images/noface_60x60.jpg'/></div>",
                    width: document.body.clientWidth / 3,
                }]
            }, {
                xtype: "panel",
                height: "30px",
            }, {
                xtype: "panel",
                height: "1px",
            }, {
                xtype: "button",
                id: "cameraTake",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:5px;'><img src='resources/images/camera-take.png'/></div><div style='float:left;padding-top:11px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>拍一张照片</p></div>"

            }, {
                xtype: "button",
                id: "cameraSelect",
                height: 40,
                cls: "bg-color-white personal-info-list personal-info-list-nobd x-button-no-padding",
                pressedCls: "personalCeter-pressing",
                html: "<div style='float:left;padding-top:5px;'><img src='resources/images/camera-select.png'/></div><div style='float:left;padding-top:11px;padding-left:8px;'><p style='font-size: 14px;color: #999;'>从相册选一张</p></div>"
            }]
        }]
    }
});