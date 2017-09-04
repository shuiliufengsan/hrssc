Ext.define('ChuangCai.view.supervise.BicycleMaintenanceView', {
    alternateClassName: 'bicycleMaintenanceView',
    extend: 'Ext.Container',
    xtype: 'bicycleMaintenanceView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: '',
        id: 'bicycleMaintenanceView',
        title: '详细内容',
        plugins: 'conHref',
        style: "background-color:#ffffff",
        //内容列表呈现
        items: [{
            xtype: 'panel',
            style: "background-color:#ffffff",
            disabled: true,
            items: [
                {
                    xtype: "panel",
                    id: "commonInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "基本信息"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    //height:30,
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "站点名称：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        style: "background-color:#ffffff",
                        width: (document.body.clientWidth) * 0.7,
                        id: "stationName",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "维护时间：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "indateId",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "维护人：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "ReportMan",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "维护状态：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "StatusText",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    id: "contactInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "问题描述"
                },
                //{
                //    xtype: "fieldset",
                //    layout: "hbox",
                //    cls: "i-panel-inner clear",
                //    items: [
                //    //    {
                //    //    xtype: "panel",
                //    //    html: "手机号码",
                //    //    width: (document.body.clientWidth) * 0.25,
                //    //    cls: "i-form-label"
                //    //},
                //    {
                //        xtype: "textareafield",
                //        width: (document.body.clientWidth) * 0.75,
                //        id: "problemDesc",
                //        component: {
                //            xtype: "input",
                //            type: "tel"
                //        },
                //        inputCls: "i-form-input",
                //    }]
                //},
            ]
        }],
        listeners: {

            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.BicycleMaintenanceView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Supervise/GetPatrolView.ashx",
                        params: {
                            id: aRecord.data.id, dynamicUrl: config.webSite
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                            Ext.getCmp('ReportMan').setValue(aRecord.data.report_man);
                            Ext.getCmp('StatusText').setValue(aRecord.data.status_text);
                            Ext.getCmp('indateId').setValue(aRecord.data.find_time);
                            //Ext.getCmp('patrolView').setHtml(11);
                            //Ext.getCmp('problemDesc').setValue(result.responseText);
                            Ext.getCmp('patrolView').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                            Ext.getCmp('patrolView').setScrollable(true);

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