Ext.define('ChuangCai.view.system.AudioView', {
    alternateClassName: 'audioView',
    extend: 'Ext.Container',
    xtype: 'audioView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'audioView',
        title: '音频内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.AudioView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetVideoView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('audioView').setHtml('<div class="newsTitle">' + aRecord.data.video_image + '</div><div class="newsTime">' + aRecord.data.publish_date + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('audioView').setScrollable(true);
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            }
        },
        items: [
            {
                xtype: 'panel',
                itemId: 'videoPanel',
                width: '320',
                id: "video1",
                height: 240,
                layout: 'fit',
                items: [{
                    xtype: 'audio',
                    url: 'resources/vedio/Between The Rainbow.mp3',
                    autoResume: false,
                    autoPause: true
                    //posterUrl: 'resources/images/welcome.png'
                }]
            }]
    }
});