Ext.define('ChuangCai.view.system.UserSetup', {
    alternateClassName: 'userSetup',
    extend: 'Ext.form.Panel',
    xtype: 'userSetup',
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
        id: 'userSetupId',
        title: '用户设置',
        height: (document.body.clientHeight),
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            style: "background-color:#ffffff",
            items: [
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "首页个数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                       {
                           xtype: 'selectfield',
                           id: 'showId',
                           options: [{
                               text: '12', value: '12'
                           }, {
                               text: '16', value: '16'
                           }, {
                               text: '20', value: '20'
                           },
                           {
                               text: '24', value: '24'
                           },
                           {
                               text: '28', value: '28'
                           }],
                           autoCapitalize: true,
                           width: (document.body.clientWidth) * 0.7,
                           usePicker: false,
                           required: false,
                           autoSelect: false,
                           clearIcon: false,
                           inputCls: "i-form-input",
                           placeHolder: "首页显示项个数"
                       }
                    ]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "显示触点：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                       {
                           xtype: 'selectfield',
                           id: 'isshowId',
                           options: [{
                               text: '是', value: 'Y'
                           },
                           {
                               text: '否', value: 'N'
                           }],
                           autoCapitalize: true,
                           width: (document.body.clientWidth) * 0.7,
                           usePicker: false,
                           required: false,
                           autoSelect: false,
                           clearIcon: false,
                           inputCls: "i-form-input",
                           placeHolder: "是否显示首页触点"
                       }
                    ]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "登录显示：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                       {
                           xtype: 'selectfield',
                           id: 'defaultDisplayId',
                           options: [{
                               text: '首页', value: 'Home'
                           },
                           {
                               text: '收藏', value: 'Favorite'
                           }],
                           autoCapitalize: true,
                           width: (document.body.clientWidth) * 0.7,
                           usePicker: false,
                           required: false,
                           autoSelect: false,
                           clearIcon: false,
                           inputCls: "i-form-input",
                           placeHolder: "进入系统默认显示内容"
                       }
                    ]
                },
                {
                    xtype: "panel",
                    layout: "hbox",
                    cls: "i-panel-inner clear",
                    items: [{
                        xtype: "panel",
                        html: "加载笔数：",
                        width: (document.body.clientWidth) * 0.3,
                        cls: "i-form-label"
                    },
                       {
                           xtype: 'textfield',
                           id: 'loadRecordCountId',
                           component: {
                               xtype: "input",
                               type: "tel"
                           },
                           autoCapitalize: true,
                           width: (document.body.clientWidth) * 0.7,
                           required: false,
                           clearIcon: false,
                           inputCls: "i-form-input",
                           placeHolder: "加载记录数，默认为10笔"
                       }
                    ]
                }
            ]
        },
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
                //Ext.regModel('SuggestType', {
                //    fields: [
                //        { name: 'value', type: 'string' },
                //        { name: 'text', type: 'string' }
                //    ]
                //});
                //suggestTypeStore = new Ext.data.Store({
                //    model: 'SuggestType',
                //    //data: [{ value: '1', text: '2' }, { value: '3', text: '4' }, { value: '5', text: '6' }]
                //    autoLoad: false,
                //    pageSize: 10,
                //    proxy: {
                //        type: "ajax",
                //        pageParam: 'currentPage', //当前页码  
                //        limitParam: 'pageSize',//每页条数
                //        url: util.getMobileSite() + 'SystemManage/GetLov.ashx?lovCode=SuggestType&companyId=' + util.getCompanyId(),
                //        reader: {
                //            type: "json",
                //            rootProperty: "result",
                //            totalProperty: 'totalCounts'
                //        }
                //    }
                //});
                //Ext.getCmp('suggestTypeId').setStore(suggestTypeStore);
                //suggestTypeStore.load();
            },
            deactivate: function (newActiveItem, obj, oldActiveItem, eOpts) {

            }
        }
    }
});