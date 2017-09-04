Ext.define('ChuangCai.view.shop.AddProducts', {
    alternateClassName: 'addProducts',
    extend: 'Ext.form.Panel',
    xtype: 'addProducts',
    requires: ['Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Password', 'ux.DateTimePicker',
               'Ext.TitleBar', 'Ext.Button', 'ux.Fileup'
    ],
    config: {
        id: 'addProductsId',
        title: '修改拍品信息',
        height: (document.body.clientHeight),
        items: [{
            xtype: 'panel',
            id: 'fieldset1',
            style: "background-color:#ffffff",
            items: [{
                xtype: "panel",
                width: (document.body.clientWidth),
                height: 30,
                cls: "addProduct-fieldset-title",
                html: "<p style='font-size:14px'><b>基本信息</b></p>"
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">名称<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "productName",
                    inputCls: "addProduct-form-input",
                    clearIcon: false,
                    placeHolder: "请输入拍品名称"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    html: '<p style="line-height:40px">语言<span style="color:red;">*</span></p>',
                    width: document.body.clientWidth / 4,
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    inputCls: "addProduct-form-input",
                    id: 'language',
                    options: [{
                        text: '中文', value: 'zh'
                    }, {
                        text: '英文', value: 'en'
                    }],
                    autoCapitalize: true,
                    width: document.body.clientWidth * 3 / 4,
                    usePicker: false,
                    required: false,
                    autoSelect: false,
                    clearIcon: false,
                    placeHolder: "请选择语言",
                    inputCls: "addProduct-form-input",
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    html: '<p style="line-height:40px">分类1<span style="color:red;">*</span></p>',
                    width: document.body.clientWidth / 4,
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'productType_one',
                    width: document.body.clientWidth * 3 / 4,
                    placeHolder: "请选择分类1",
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">分类2<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'productType_two',
                    inputCls: "addProduct-form-input",
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    placeHolder: "请选择分类2"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px;">分类3</p>',
                    inputCls: "addProduct-form-input",
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'productType_three',
                    inputCls: "addProduct-form-input",
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    placeHolder: "请选择分类3"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">保留价<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "evaluateprice",
                    component: {
                        xtype: "input",
                        type: "tel"
                    },
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入拍品评估价"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">起拍价<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "startprice",
                    component: {
                        xtype: "input",
                        type: "tel"
                    },
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入拍品起拍价"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">保证金<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "deposit",
                    component: {
                        xtype: "input",
                        type: "tel"
                    },
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入拍品保证金"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">加价幅度<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "increaseprice",
                    component: {
                        xtype: "input",
                        type: "tel"
                    },
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入拍品加价幅度"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">库存<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "stockNum",
                    component: {
                        xtype: "input",
                        type: "tel"
                    },
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入拍品库存"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">开始时间<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'datetimepickerfield',
                    id: 'beginTime',
                    width: document.body.clientWidth * 3 / 4,
                    value: null,
                    inputCls: "addProduct-form-input",
                    autoCapitalize: true,
                    required: true,
                    useClearIcon: true,
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">结束时间<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'datetimepickerfield',
                    id: 'endTime',
                    width: document.body.clientWidth * 3 / 4,
                    value: null,
                    dateFormat: 'Y/m/d',
                    inputCls: "addProduct-form-input",
                    autoCapitalize: true,
                    required: true,
                    useClearIcon: true
                }]
            }]
        }, {
            xtype: 'panel',
            id: 'fieldset2',
            style: "background-color:#ffffff",
            items: [{
                xtype: "panel",
                width: (document.body.clientWidth),
                height: 30,
                cls: "addProduct-fieldset-title",
                html: "<p style='font-size:14px'><b>拍品信息</b></p>"
            }, {
                xtype: "panel",
                layout: "hbox",
                height: 100,
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px;margin-left: 10px;">拍品简介<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'textareafield',
                    id: 'proDescription',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    width: document.body.clientWidth * 3 / 4,
                    placeHolder: "请输入简介"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">省份<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'province',
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    inputCls: "addProduct-form-input",
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">城市<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'city',
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    inputCls: "addProduct-form-input",
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">区县<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: 'selectfield',
                    id: 'county',
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    inputCls: "addProduct-form-input",
                }]
            }]
        }, {
            xtype: 'panel',
            id: 'fieldset3',
            style: "background-color:#ffffff",
            items: [{
                xtype: "panel",
                width: (document.body.clientWidth),
                height: 30,
                cls: "addProduct-fieldset-title",
                html: "<p style='font-size:14px'><b>联系方式</b></p>"
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">联系人<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "goodcontacter",
                    //component: {
                    //    xtype: "input",
                    //    type: "tel"
                    //},
                    inputCls: "addProduct-form-input",
                    clearIcon: false,
                    placeHolder: "请输入联系人"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                height: 100,
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px;margin-left: 10px;">地址<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textareafield",
                    clearIcon: false,
                    width: document.body.clientWidth * 3 / 4,
                    id: "address",
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入地址"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">邮箱<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "contacterEmail",
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入邮箱"
                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="line-height:40px">联系电话<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "mobileNumber",
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入联系电话"

                }]
            }, {
                xtype: "panel",
                layout: "hbox",
                cls: "addProduct-panel-inner clear",
                items: [{
                    xtype: "panel",
                    width: document.body.clientWidth / 4,
                    html: '<p style="margin-top:2px">现场看货联系人<span style="color:red;">*</span></p>',
                    cls: "addProduct-form-label"
                }, {
                    xtype: "textfield",
                    width: document.body.clientWidth * 3 / 4,
                    id: "liveMan",
                    clearIcon: false,
                    inputCls: "addProduct-form-input",
                    placeHolder: "请输入现场看货联系人"
                }]
            }]
        }, {
            xtype: "textfield",
            height: "10px",
            id: "loadStatus",
            hidden: true
        }, {
            xtype: "textfield",
            height: "10px",
            id: "loadProductId",
            hidden: true
        }, {
            xtype: "panel",
            height: "10px",
            //}, {
            //    xtype: "panel",
            //    layout: "hbox",
            //    items: [{
            //        itemId: 'takePhotoBtn',
            //        xtype: 'button',
            //        autoUpload: true,
            //        width: document.body.clientWidth * 0.5,
            //        height: '40px',
            //        cls: "i-button",
            //        text: '拍照'
            //    }, {
            //        //itemId: 'selectPhotoBtn',
            //        id: 'selectPhotoBtn',
            //        xtype: 'button',
            //        autoUpload: true,
            //        width: document.body.clientWidth * 0.5,
            //        height: '40px',
            //        cls: "i-button",
            //        text: '照片',
            //    }]
        }, {
            itemId: 'imageContainerId',
            xtype: 'panel',
            layout: "hbox",
            items: [{
                xtype: 'img',
                src: 'resources/images/addPhoto.png',
                width: document.body.clientWidth * 0.25,
                height: document.body.clientWidth * 0.25,
                style: 'margin-top:15px;margin-left:15px',
                listeners: {
                    tap: function () {
                        if (util.isWeixin() == true) {
                            uploadProductImageTap();
                        } else {
                            Ext.getCmp("actionsheetDisplay").setHidden(false);
                            Ext.getCmp("addProductsId").setMasked(true);
                        }
                    }
                }
            }]
        }, {
            xtype: "panel",
            docked: 'bottom',
            id: 'actionsheetDisplay',
            hidden: true,
            style: "margin-bottom:40px",
            items: [{
                xtype: "actionsheet",
                enter: 'top',
                exit: 'right',
                items: [{
                    itemId: 'takePhotoBtn',
                    xtype: 'button',
                    autoUpload: true,
                    //width: document.body.clientWidth * 0.5,
                    height: '40px',
                    cls: "takePhoto-button",
                    text: '<p style="font-family: 微软雅黑;">拍照</p>'
                }, {
                    itemId: 'selectPhotoBtn',
                    id: 'selectPhotoBtn',
                    xtype: 'button',
                    autoUpload: true,
                    //width: document.body.clientWidth * 0.5,
                    height: '40px',
                    cls: "selectPhoto-button",
                    text: '<p style="font-family: 微软雅黑;">从手机相册中选择</p>'
                }, {
                    height: '40px',
                    cls: "addPhoto-cancel-button",
                    text: '<p style="font-family: 微软雅黑;">取消</p>',
                    listeners: {
                        tap: function () {
                            Ext.getCmp("actionsheetDisplay").setHidden(true);
                            Ext.getCmp("addProductsId").setMasked(false);
                        }
                    }
                }]
            }]
        }, {
            itemId: 'imageContainerId',
            xtype: 'panel',
            cls: 'cardPanel',
            layout: "hbox",
            style: "margin-bottom:50px",
            items: [{
                itemId: 'loadedImage0',
                id: 'loadedImage0',
                xtype: 'img',
                width: document.body.clientWidth * 0.25,
                height: document.body.clientWidth * 0.25,
                style: 'margin-top:15px;'
            }, {
                itemId: 'loadedImage1',
                id: 'loadedImage1',
                xtype: 'img',
                width: document.body.clientWidth * 0.25,
                height: document.body.clientWidth * 0.25,
                style: 'margin-top:15px;'
            }, {
                itemId: 'loadedImage2',
                id: 'loadedImage2',
                xtype: 'img',
                width: document.body.clientWidth * 0.25,
                height: document.body.clientWidth * 0.25,
                style: 'margin-top:15px;'
            }, {

            }]
        }]
    }
});