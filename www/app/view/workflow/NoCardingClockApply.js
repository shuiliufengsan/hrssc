Ext.define('ChuangCai.view.workflow.NoCardingClockApply', {
    alternateClassName: 'NoCardingClockApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'NoCardingClockApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'NoCardingClockApplyId',
        title: '填写忘刷单',
        items: [{
            xtype: 'fieldset',
            id: 'fieldset1',
            //title: '个人信息',
            defaults: {
                labelWidth: '35%'
            },
            items: [
            {
                xtype: 'textfield',
                id: 'employeeCodeId',
                label: '员工编号',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'employeeName',
                label: '员工姓名',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'CardingTypeName',
                label: '忘刷类别',
                options: [{
                    text: '上班', value: ''
                }, {
                    text: '下班', value: ''
                }, {
                    text: '休息起', value: ''
                }, {
                    text: '休息讫', value: ''
                }, {
                    text: '加班起', value: ''
                }, {
                    text: '加班讫', value: ''
                }],
                autoCapitalize: true,
                required: true,
                autoSelect: false,
                usePicker: false,
                clearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'CardingTime',
                label: '刷卡时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                //picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'nocardingCode',
                label: '原因代号',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'nocardingReason',
                label: '原因名称',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textareafield',
                id: 'cardingInstructions',
                label: '说明',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            }]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                //Ext.getCmp('fieldset1').disable();
                //Ext.getCmp('employeeCodeId').setPlaceHolder('');
                //Ext.getCmp('video1').play();
                var bar = obj.getNavigationBar();
                if (Ext.getCmp('edit') == null) {
                    bar.add({
                        id: 'edit',
                        xtype: 'img',
                        right: 5,
                        centered: true,
                        src: 'resources/images/system/submit.gif',
                        width: 45,
                        height: 45,
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                        }
                    });
                }
            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var bar = obj.getNavigationBar();
                bar.remove(Ext.getCmp('edit'));
            }
        }
    }
});