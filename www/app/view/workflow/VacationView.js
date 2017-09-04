Ext.define('ChuangCai.view.workflow.VacationView', {
    alternateClassName: 'vacationView',
    extend: 'Ext.Container',
    xtype: 'vacationView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: 'info',
        id: 'vacationView',
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
                id: 'vacation_type_name',
                name: 'vacation_type_name',
                label: '假别名称',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'begintime',
                name: 'begintime',
                label: '开始时间',
                autoCapitalize: true,
                required: false,
                clearIcon: false
            },
            {
                xtype: 'textfield',
                id: 'endtime',
                name: 'endtime',
                label: '结束时间',
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
                var aRecord = Ext.Viewport.VacationView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.getCmp('employee_code').setValue(aRecord.data.employee_code);
                    Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                    Ext.getCmp('vacation_type_name').setValue(aRecord.data.vacation_type_name);
                    Ext.getCmp('begintime').setValue(aRecord.data.begintime);
                    Ext.getCmp('endtime').setValue(aRecord.data.endtime);
                    Ext.getCmp('audit_status').setValue(aRecord.data.audit_status);
                    Ext.getCmp('vacationView').setScrollable(true);
                }
            }

        }
    }
});