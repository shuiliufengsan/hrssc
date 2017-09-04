Ext.define('ChuangCai.view.system.VideoView', {
    alternateClassName: 'videoView',
    extend: 'Ext.Container',
    xtype: 'videoView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'videoView',
        title: '视频内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.VideoView.getRecord();
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
                            Ext.getCmp('videoView').setHtml('<div class="newsTitle">' + aRecord.data.video_image + '</div><div class="newsTime">' + aRecord.data.publish_date + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('videoView').setScrollable(true);

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
                id: 'employeeCodeId',
                width: '320',
                layout: 'fit',
                height: '240'
            },
            {
                xtype: 'panel',
                itemId: 'videoPanel',
                width: '320',
                id: "video1",
                height: 240,
                layout: 'fit',
                items: [{
                    xtype: 'video',
                    url: 'resources/vedio/sample.mov',
                    autoResume: false,
                    autoPause: true
                    //posterUrl: 'resources/images/welcome.png'
                }]
            }]
    }
});