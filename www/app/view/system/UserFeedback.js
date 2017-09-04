Ext.define('ChuangCai.view.system.UserFeedback', {
    alternateClassName: 'UserFeedbackInfo',
    extend: 'Ext.form.Panel',
    xtype: 'UserFeedbackInfo',
    requires: ['Ext.form.FieldSet',
               'Ext.field.Number',
               'Ext.field.Password',
               'ux.DateTimePicker',
               'Ext.TitleBar',
               'Ext.Button',
               'ux.Fileup'
    ],
    config: {
        cls: '',
        id: 'UserFeedbackId',
        title: '用户反馈',
        height: (document.body.clientHeight),
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            style: "background-color:#ffffff",
            //title: '个人信息',
            instructions: '感谢您的反馈,请填写正确的手机号码、QQ或Email,以使我们及时为您解决问题。',
            items: [
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "建议类型：" + '<span style="color:red;">*</span>',
                        width: (document.body.clientWidth) * 0.33,
                        cls: "i-form-label"
                    },
                       {
                           xtype: 'selectfield',
                           id: 'suggestTypeId',
                           //options: [{
                           //    text: '建议', value: 'Suggest'
                           //}, {
                           //    text: '投诉', value: 'Explain'
                           //}, {
                           //    text: '其他', value: 'Other'
                           //}],
                           autoCapitalize: true,
                           width: (document.body.clientWidth) * 0.67,
                           usePicker: false,
                           required: false,
                           autoSelect: false,
                           clearIcon: false,
                           inputCls: "i-form-input",
                           placeHolder: "请选择建议类型"
                       }
                    ]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "建议内容：" + '<span style="color:red;">*</span>',
                        width: (document.body.clientWidth) * 0.32,
                        cls: "i-form-label"
                    },
                    {
                        xtype: "textareafield",
                        width: (document.body.clientWidth) * 0.68,
                        id: "suggestContentId",
                        inputCls: "i-form-input",
                        placeHolder: "您的每一份意见对我们非常重要"
                    }]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "联系方式：",
                        width: (document.body.clientWidth) * 0.32,
                        cls: "i-form-label"
                    },
                    {
                        xtype: 'textfield',
                        id: 'contactTelId',
                        autoCapitalize: true,
                        required: true,
                        useClearIcon: true,
                        component: {
                            xtype: "input",
                            type: "tel"
                        },
                        width: (document.body.clientWidth) * 0.68,
                        placeHolder: "选填,以便我们给您及时回复"
                    }]
                }
            ]
        },
        //{
        //    xtype: "panel",
        //    html: "<p style='padd-left:15px;color: #b2adad;'>&nbsp&nbsp&nbsp感谢您的反馈,请填写正确的手机号码、QQ或Email,以使我们及时为您解决问题。</p>"
        //},
        //{
        //    itemId: 'fileLoadBtn',
        //    xtype: 'button',
        //    autoUpload: true,
        //    width: document.body.clientWidth,
        //    height: '40px',
        //    cls: "i-button",
        //    text: '拍照',
        //    loadAsDataUrl: true
        //},
        // {
        //     itemId: 'imageContainerId',
        //     xtype: 'panel',
        //     cls: 'cardPanel',
        //     layout: "hbox",
        //     items: [{
        //         itemId: 'loadedImage1',
        //         id: 'loadedImage1',
        //         xtype: 'img',
        //         width: document.body.clientWidth * 0.33,
        //         height: document.body.clientWidth * 0.33,
        //         style: 'margin-top:15px;'
        //     }, {
        //         itemId: 'loadedImage2',
        //         id: 'loadedImage2',
        //         xtype: 'img',
        //         width: document.body.clientWidth * 0.33,
        //         height: document.body.clientWidth * 0.33,
        //         style: 'margin-top:15px;'
        //     }, {
        //         itemId: 'loadedImage3',
        //         id: 'loadedImage3',
        //         xtype: 'img',
        //         width: document.body.clientWidth * 0.33,
        //         height: document.body.clientWidth * 0.33,
        //         style: 'margin-top:15px;'
        //     }]
        // },
         //{
         //    xtype: "panel",
         //    height: "50px",
         //    layout: "hbox",
         //    cls: "i-footer-panel",
         //    style: "z-index: 1",
         //    padding: 10,
         //    items: [{
         //        xtype: "button",
         //        height: "30px",
         //        width: "100px",
         //        id: "SubmitOrder",
         //        margin: "0 auto",
         //        cls: "i-button",
         //        html: "提交订单"
         //    }]
         //}
        ],
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                Ext.regModel('SuggestType', {
                    fields: [
                        { name: 'value', type: 'string' },
                        { name: 'text', type: 'string' }
                    ]
                });
                suggestTypeStore = new Ext.data.Store({
                    model: 'SuggestType',
                    //data: [{ value: '1', text: '2' }, { value: '3', text: '4' }, { value: '5', text: '6' }]
                    autoLoad: false,
                    pageSize: 10,
                    proxy: {
                        type: "ajax",
                        pageParam: 'currentPage', //当前页码  
                        limitParam: 'pageSize',//每页条数
                        url: util.getMobileSite() + 'SystemManage/GetLov.ashx?lovCode=SuggestType&companyId='+util.getCompanyId(),
                        reader: {
                            type: "json",
                            rootProperty: "result",
                            totalProperty: 'totalCounts'
                        }
                    }
                });
                Ext.getCmp('suggestTypeId').setStore(suggestTypeStore);
                suggestTypeStore.load();
            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {
                
            }
        }
    }
});