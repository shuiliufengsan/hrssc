Ext.define('ChuangCai.view.system.NoticeView', {
    alternateClassName: 'noticeView',
    extend: 'Ext.Container',
    xtype: 'noticeView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'noticeView',
        title: '公告内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.NoticeView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetNoticeView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('noticeView').setHtml('<div class="newsTitle">' + aRecord.data.title + '</div><div class="newsTime">' + aRecord.data.begin_date + '</div><br/><div class="">' + result.responseText + '</div>');
                            //Ext.getCmp('noticeView').setHtml('<div class="newsTitle">' + aRecord.data.begin_date + '</div><br/><div class="">' + result.content + '</div>');
                            Ext.getCmp('noticeView').setScrollable(true);

                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });
                }
            }
        }
    }
});