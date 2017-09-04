Ext.define('ChuangCai.view.system.ContactView', {
    alternateClassName: 'contactView',
    extend: 'Ext.Container',
    xtype: 'contactView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img', 'Ext.form.FieldSet'],
    config: {
        cls: '',
        id: 'contactView',
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
                        html: "姓名：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        style: "background-color:#ffffff",
                        width: (document.body.clientWidth) * 0.7,
                        id: "employee_name",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "部门：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "department_name",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    id: "contactInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "联系信息"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "手机：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "mobile",
                        inputCls: "i-form-input",
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "邮件地址：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "email",
                        inputCls: "i-form-input",
                    }]
                },
                 {
                     xtype: "panel",
                     layout: "hbox",
                     cls: "i-panel-inner clear",
                     items: [{
                         xtype: "panel",
                         html: "工作电话：",
                         width: (document.body.clientWidth) * 0.3,
                         cls: "i-form-label"
                     },
                     {
                         xtype: "textfield",
                         disabled: true,
                         width: (document.body.clientWidth) * 0.7,
                         id: "work_tel",
                         inputCls: "i-form-input",
                     }]
                 },
                 {
                     xtype: "panel",
                     layout: "hbox",
                     cls: "i-panel-inner clear",
                     items: [{
                         xtype: "panel",
                         html: "工作地址：",
                         width: (document.body.clientWidth) * 0.3,
                         cls: "i-form-label"
                     },
                     {
                         xtype: "textfield",
                         disabled: true,
                         width: (document.body.clientWidth) * 0.7,
                         id: "work_address",
                         inputCls: "i-form-input",
                     }]
                 },
                 {
                     xtype: "panel",
                     layout: "hbox",
                     cls: "i-panel-inner clear",
                     items: [{
                         xtype: "panel",
                         html: "家庭电话：",
                         width: (document.body.clientWidth) * 0.3,
                         cls: "i-form-label"
                     },
                     {
                         xtype: "textfield",
                         disabled: true,
                         width: (document.body.clientWidth) * 0.7,
                         id: "home_tel",
                         inputCls: "i-form-input",
                     }]
                 },
                  {
                      xtype: "panel",
                      layout: "hbox",
                      cls: "i-panel-inner clear",
                      items: [{
                          xtype: "panel",
                          html: "家庭地址：",
                          width: (document.body.clientWidth) * 0.3,
                          cls: "i-form-label"
                      },
                      {
                          xtype: "textfield",
                          disabled: true,
                          width: (document.body.clientWidth) * 0.7,
                          id: "home_address",
                          inputCls: "i-form-input",
                      }]
                  },
                {
                    xtype: "panel",
                    id: "otherInfoId",
                    width: (document.body.clientWidth),
                    height: 50,
                    cls: "i-form-fieldset-title clear",
                    html: "其他信息"
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "备注：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textfield",
                        disabled: true,
                        width: (document.body.clientWidth) * 0.7,
                        id: "remark",
                        inputCls: "i-form-input",
                    }]
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
                var aRecord = Ext.Viewport.ContactView.getRecord();
                if (aRecord == null) {
                    util.showMessage1('空', true);
                }
                else {

                    Ext.Ajax.request({
                        url: util.getMobileSite() + "SystemManage/GetContactView.ashx",
                        params: {
                            id: aRecord.data.id
                        },
                        headers: { 'X-Requested-With': 'XMLHttpRequest' },
                        success: function (result, context) {
                            Ext.getCmp('employee_name').setValue(aRecord.data.employee_name);
                            Ext.getCmp('department_name').setValue(aRecord.data.department_name);
                            Ext.getCmp('mobile').setValue(aRecord.data.mobile);
                            Ext.getCmp('email').setValue(aRecord.data.email);
                            Ext.getCmp('work_tel').setValue(aRecord.data.work_tel);
                            Ext.getCmp('home_tel').setValue(aRecord.data.home_tel);
                            Ext.getCmp('work_address').setValue(aRecord.data.work_address);
                            Ext.getCmp('home_address').setValue(aRecord.data.home_address);
                            Ext.getCmp('remark').setValue(aRecord.data.remark);
                            Ext.getCmp('contactView').setScrollable(true);
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