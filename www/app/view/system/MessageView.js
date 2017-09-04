Ext.define('ChuangCai.view.system.MessageView', {
    alternateClassName: 'messageView',
    extend: 'Ext.Container',
    xtype: 'messageView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'messageView',
        title: '消息内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.MessageView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetMessageView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('messageView').setHtml('<div class="newsTitle">' + aRecord.data.message_title + '</div><div class="newsTime">' + aRecord.data.send_time + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('messageView').setScrollable(true);
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