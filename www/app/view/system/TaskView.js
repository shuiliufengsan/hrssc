Ext.define('ChuangCai.view.system.TaskView', {
    alternateClassName: 'taskView',
    extend: 'Ext.Container',
    xtype: 'taskView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {
        cls: 'info',
        id: 'taskView',
        title: '任务内容',
        plugins: 'conHref',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.TaskView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetTaskView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('taskView').setHtml('<div class="newsTitle">' + aRecord.data.calendar_title + '</div><div class="newsTime">' + aRecord.data.end_date + '</div><br/><div class="">' + result.responseText + '</div>');
                            Ext.getCmp('taskView').setScrollable(true);

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