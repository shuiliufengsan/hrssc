Ext.define('ChuangCai.view.workflow.OvertimeApply', {
    alternateClassName: 'OvertimeApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'OvertimeApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'vacationApplyId',
        title: '填写加班单',
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
                clearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'beginTime',
                label: '开始时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                //picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'endTime',
                label: '结束时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'applyHour',
                label: '加班时数',
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'overtimeType',
                label: '加班类别',
                options: [{
                    text: '平时加班', value: ''
                }, {
                    text: '周末加班', value: ''
                }, {
                    text: '国定假日加班', value: ''
                }],
                autoSelect: false,
                usePicker: false,
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'overtimeReason',
                label: ' 加班原因 ',
                options: [{
                    text: '工作需要', value: ''
                }, {
                    text: '值班', value: ''
                }],
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'overtimeOther',
                labelWidth: '40%',
                label: '计费/调休/其他',
                options: [{
                    text: '计费', value: ''
                }, {
                    text: '调休', value: ''
                }, {
                    text: '其他', value: ''
                }],
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            },
            {
                xtype: 'textareafield',
                id: 'overmeInstructions',
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