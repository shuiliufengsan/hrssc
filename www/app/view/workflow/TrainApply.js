Ext.define('ChuangCai.view.workflow.TrainApply', {
    alternateClassName: 'trainApplyInfo',
    extend: 'Ext.form.Panel',
    xtype: 'trainApplyInfo',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'trainApplyId',
        title: '填写培训单',
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
                id: 'departmentName',
                label: '部门名称',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
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
                xtype: 'textfield',
                id: 'employeePosition',
                label: '职位',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'trainTeacher',
                label: '讲师',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'trainLesson',
                label: '培训课程',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'trainAddress',
                label: '培训地点',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'selectfield',
                id: 'trainType',
                label: '培训方式',
                options: [{
                    text: '内训', value: ''
                }, {
                    text: '外训', value: ''
                }],
                autoSelect: false,
                usePicker: false,
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
                xtype: 'textareafield',
                id: 'applyInstructions',
                label: '申请说明',
                autoCapitalize: true,
                required: true,
                clearIcon: true

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