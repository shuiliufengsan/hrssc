Ext.define('ChuangCai.view.salary.SalaryDetails', {
    alternateClassName: 'salarydetails',
    extend: 'Ext.form.Panel',
    xtype: 'salarydetails',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker'],
    config: {
        cls: '',
        id: 'salarydetailsId',
        title: '薪资明细',
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
                id: 'employee_code',
                // id:'from_employee_id',
                // name: 'from_employee_id',
                label: '员工编号',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'employee_name',
                //id: 'log_user_name',
                //name: 'log_user_name',

                label: '员工姓名',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'textfield',
                id: 'sequence',
                //id: 'log_user_name',
                //name: 'log_user_name',

                label: '工资',
                autoCapitalize: true,
                required: true,
                clearIcon: true
            },
            {
                xtype: 'datetimepickerfield',
                id: 'transfer_date',
                label: '时间',
                value: new Date(),
                dateFormat: 'Y/m/d',
                picker: { yearFrom: 1900, yearTo: new Date().getFullYear() },
                autoCapitalize: true,
                required: true,
                useClearIcon: true
            }]
        }],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var aRecord = Ext.Viewport.SalaryDetails.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {
                    Ext.Ajax.request({
                        url: util.getMobileSite() + "Salary/GetSalaryDetailsBrw.ashx",
                        //params: {
                        //    id: aRecord.data.id
                        //},
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            var dd = result.responseText;
                            var ee = Ext.decode(dd);
                            Ext.getCmp('employee_code').setValue(ee[0].EMPLOYEE_CODE);
                            Ext.getCmp('employee_name').setValue(ee[0].EMPLOYEE_NAME);
                            Ext.getCmp('sequence').setValue(ee[0].SEQUENCE);
                            Ext.getCmp('transfer_date').setValue(ee[0].TRANSFER_DATE);
                        },
                        failure: function (result, context) {
                            var msg = result.responseText;
                            util.showMessage(msg, true);
                        },
                        method: "POST"
                    });


                    //Ext.getCmp('changeShiftApplyInfo').setScrollable(true);
                }
                //Ext.getCmp('fieldset1').disable();
                //Ext.getCmp('employeeCodeId').setPlaceHolder('');
                //Ext.getCmp('video1').play();
                var bar = obj.getNavigationBar();
                if (Ext.getCmp('edit') == null) {
                    bar.add({
                        id: 'edit',
                        xtype: 'button',
                        text: '编辑',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').enable();
                            var bar = obj.getNavigationBar();
                            Ext.getCmp('edit').hide();
                            if (Ext.getCmp('save') !== null) {
                                Ext.getCmp('save').show();
                                Ext.getCmp('cancel').show();
                            }
                            $("#loading")
                            .ajaxStart(function () {
                                $(this).show();
                            })
                            .ajaxComplete(function () {
                                $(this).hide();
                            });
                            $.ajaxFileUpload
                            (
                            {
                                url: 'uploadFile!uploadTest.action?testName=' + name,
                                secureuri: false,
                                fileElementId: 'files',
                                dataType: 'json',
                            }
                            )
                        }
                    });
                }
                if (Ext.getCmp('save') == null) {
                    bar.add({
                        id: 'save',
                        xtype: 'button',
                        text: '保存',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').disable();
                            Ext.getCmp('save').hide();
                            Ext.getCmp('cancel').hide();
                            if (Ext.getCmp('edit') !== null) {
                                Ext.getCmp('edit').show();
                            }
                            Ext.getCmp('employeeCodeId').setValue('费鹏');
                        }
                    });
                    bar.add({
                        id: 'cancel',
                        xtype: 'button',
                        text: '取消',
                        align: 'right',
                        ui: 'decline',
                        handler: function () {
                            Ext.getCmp('fieldset1').disable();
                            Ext.getCmp('save').hide();
                            Ext.getCmp('cancel').hide();
                            if (Ext.getCmp('edit') !== null) {
                                Ext.getCmp('edit').show();
                            }
                        }
                    });
                    Ext.getCmp('save').hide();
                    Ext.getCmp('cancel').hide();
                }

            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                var bar = obj.getNavigationBar();
                if (typeof (Ext.getCmp('edit')) != "undefined") {
                    bar.remove(Ext.getCmp('edit'));
                }
                if (typeof (Ext.getCmp('save')) != "undefined") {
                    bar.remove(Ext.getCmp('save'));
                }
                if (typeof (Ext.getCmp('cancel')) != "undefined") {
                    bar.remove(Ext.getCmp('cancel'));
                }
            }
        }
    }
});