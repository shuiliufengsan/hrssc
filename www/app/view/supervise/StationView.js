Ext.define('ChuangCai.view.supervise.StationView', {
    alternateClassName: 'stationView',
    extend: 'Ext.Container',
    xtype: 'patrolView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: '',
        id: 'stationView',
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
                        html: "站点编号：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        style: "background-color:#ffffff",
                        width: (document.body.clientWidth) * 0.7,
                        id: "stationCode",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
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
                        html: "站点地址：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "stationAddress",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "状态：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "stationStatus",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    id: "contactInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "详细信息:"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "总锁柱数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "lockCount",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "自行车数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "bicycleCount",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "空锁柱数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "lockEmptyCount",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "坏锁柱数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "lockBadCount",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "温度：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "Temprature",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "电压：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "Voltage",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "径度：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "Longitude",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "纬度：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "Latitude",
                        inputCls: "i-form-input",
                    }]
                },
            ]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                //var aRecord = Ext.Viewport.PatrolView.getRecord();
                //if (aRecord == null) {
                //    util.showMessage1('空', true);
                //}
                //else {
                //    Ext.Ajax.request({
                        //url: util.getMobileSite() + "Supervise/GetPatrolView.ashx",
                        //params: {
                        //    id: aRecord.data.id
                        //},
                        //headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        //success: function (result, context) {
                            //util.showMessage(aRecord.data.title, true);
                            //Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                            //Ext.getCmp('ReportMan').setValue(aRecord.data.report_man);
                            //Ext.getCmp('StatusText').setValue(aRecord.data.status_text);
                            //Ext.getCmp('indateId').setValue(aRecord.data.find_time);
                            //Ext.getCmp('patrolView').setHtml(11);
                            //Ext.getCmp('problemDesc').setValue(result.responseText);
                            //Ext.getCmp('patrolView').setHtml('<div class="i-panel-content">' + result.responseText + '</div>');
                            //Ext.getCmp('patrolView').setScrollable(true);

                    //    },
                    //    failure: function (result, context) {
                    //        var msg = result.responseText;
                    //        util.showMessage(msg, true);
                    //    },
                    //    method: "POST"
                    //});
                //}
                var aRecord = Ext.Viewport.StationView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('stationCode').setValue(aRecord.data.station_code);
                    Ext.getCmp('stationName').setValue(aRecord.data.station_name);
                    Ext.getCmp('stationAddress').setValue(aRecord.data.station_address);
                    Ext.getCmp('stationStatus').setValue(aRecord.data.station_status);
                    Ext.getCmp('Temprature').setValue(aRecord.data.temprature);
                    Ext.getCmp('Voltage').setValue(aRecord.data.voltage);
                    Ext.getCmp('Longitude').setValue(aRecord.data.longitude);
                    Ext.getCmp('Latitude').setValue(aRecord.data.latitude);
                    Ext.getCmp('bicycleCount').setValue(aRecord.data.bicycle_count);
                    Ext.getCmp('lockCount').setValue(aRecord.data.lock_count);
                    Ext.getCmp('lockEmptyCount').setValue(aRecord.data.lock_empty_count);
                    Ext.getCmp('lockBadCount').setValue(aRecord.data.lock_bad_count);
                    Ext.getCmp('stationView').setScrollable(true);
                }
            }

        }
    }
});