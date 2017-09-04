Ext.define('ChuangCai.view.workflow.NoCardingView', {
    alternateClassName: 'noCardingView',
    extend: 'Ext.Container',
    xtype: 'noCardingView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: 'info',
        id: 'noCardingView',
        title: '详细内容',
        plugins: 'conHref',
        //内容列表呈现
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '35%'
            },
            disabled: true,
            items: [
            {
                xtype: 'textfield',
                id: 'employee_code',
                name: 'employee_code',
                label: '员工编号',
                autoCapitalize: true,
                required: false,

                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'employee_name',
                name: 'employee_name',
                label: '员工姓名',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'record_time',
                name: 'record_time',
                label: '刷卡时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'shift_type',
                name: 'shift_type',
                label: '刷卡类别',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'nocarding_name',
                name: 'nocarding_name',
                label: '原因名称',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'remark',
                name: 'remark',
                label: '备注',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'audit_status',
                name: 'audit_status',
                label: '审核状态',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            }]
        }],
        listeners: {

            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.NoCardingView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('employee_code').setValue(aRecord.data.employee_code);
                    Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                    Ext.getCmp('record_time').setValue(aRecord.data.record_time);
                    Ext.getCmp('shift_type').setValue(aRecord.data.shift_type);
                    Ext.getCmp('nocarding_name').setValue(aRecord.data.nocarding_name); 
                    Ext.getCmp('remark').setValue(aRecord.data.remark);
                    Ext.getCmp('audit_status').setValue(aRecord.data.audit_status);
                    Ext.getCmp('noCardingView').setScrollable(true);
                }
            }

        }
    }
});