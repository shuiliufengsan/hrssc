Ext.define('ChuangCai.view.system.CalendarInfo', {
    alternateClassName: 'CalendarInfo',
    extend: 'Ext.Container',
    xtype: 'CalendarInfo',
    requires: ['Ext.form.FieldSet',
               'Ext.field.Number',
               'Ext.field.Password',
               'ux.TouchCalendar',
               'ux.TouchCalendarView',
               'ux.TouchCalendarEvents',
                'Ext.List'
    ],
    config: {
        id: 'CalendarInfoId',
        title: '排班信息',
        listeners: {
            activate: function (newActiveItem, obj, oldActiveItem, eOpts) {

                Ext.define("CardingInfo", {
                    extend: "Ext.data.Model",
                    config: {
                        fields: [{
                            name: 'event',
                            type: 'string'
                        }, {
                            name: 'title',
                            type: 'string'
                        }, {
                            name: 'start',
                            type: 'string'
                        }, {
                            name: 'end',
                            type: 'string'
                        }, {
                            name: 'css',
                            type: 'string'
                        }]
                    }
                });

                var cardingStore = new Ext.data.Store({
                    model: 'CardingInfo',
                    proxy: {
                        type: "ajax",
                        url: util.getMobileSite() + 'HR/GetCardingInfo.ashx?EmployeeId='+util.getEmpId(),
                        reader: {
                            type: "json",
                            rootProperty: "result",
                            totalProperty: 'totalCounts'
                        }
                    },
                    autoLoad: true
                });
                
                var calendarView = Ext.create('ux.TouchCalendarView', {
                    minDate: Ext.Date.add(new Date(), Ext.Date.DAY, -46),
                    maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                    viewMode: 'month',
                    weekStart: 0,
                    value: new Date(),
                    eventStore: cardingStore,

                    plugins: [Ext.create('ux.TouchCalendarEvents', {
                        eventHeight: 'auto',
                        eventBarTpl: '<div>{event}</div>'
                    })]
                });
                
                //calendarView.eventStore.addData({ "event": "aa", "title": "Event2", "start": "2014-7-18 09:01:00", "end": "2014-7-18 18:01:00", "css": "calendar_red" });

                var calendarPanel = new Ext.Panel({
                    fullscreen: true,
                    width: '100%',
                    height: '80%',
                    layout: 'fit',
                    items: [calendarView, {
                        xtype: "toolbar",
                        ui: "white",
                        minHeight: "2.4em",
                        height: "2.4em",
                        margin: "0 auto 0 auto",
                        docked: "top",
                        style: {
                            'background': 'white'
                        },
                        items: [
                            {
                            xtype: "segmentedbutton",
                            centered: true,
                            defaults: {
                                width: 85
                            },

                            itemId: "workflowType",
                            items: [
                                    {
                                        text: "月视图",
                                        pressed: true,
                                        handler: function () {
                                            calendarView.setViewMode('month');
                                        }
                                    },
                                    {
                                        text: "周视图",
                                        handler: function () {
                                            calendarView.setViewMode('week');
                                        }
                                    },
                                    {
                                        text: "日视图",
                                        handler: function () {
                                            calendarView.setViewMode('day');
                                        }
                                    }
                                   ]
                            }
                          
                        ]
                    }
            //          ,
            //{
            //    xtype: "list",
            //    flex: 1
            //}
                    ]
                    
                })

                var form = Ext.create('Ext.form.Panel', {
                    fullscreen: true,
                    //border:'none',
                    width: '100%',
                    height: '20%',
                    top: '80%',
                    background:'white',
                    style: {
                        'background': 'white'
                    },
                    items: [
                        {
                            height: '3%',
                            id: 'show_Msg_one',
                        },
                        {
                            height: '3%',
                            id: 'show_Msg_two',
                        }
                    ]
                });

                //var listMSG = Ext.create('Ext.List', {
                //    fullscreen: true,
                //    onItemDisclosure: true,
                //    cls: 'list',
                //    height: '80%',
                //    itemTpl: '{title}',
                //    data: [
                //        { title: 'Item 1' },
                //        { title: 'Item 2' },
                //        { title: 'Item 3' },
                //        { title: 'Item 4' }
                //    ]
                //});
                calendarView.on('eventtap', function (event) {
                    console.log('eventtap');
                    Ext.getCmp("show_Msg_one").setHtml(event.get('event'));
                    Ext.getCmp("show_Msg_two").setHtml(event.get('title'));
                    //Ext.Msg.alert(
                    //    event.get('event'),
                    //    event.get('title')
                    //);
                    console.log(event);
                });
                Ext.getCmp("CalendarInfoId").add(calendarPanel);
                Ext.getCmp("CalendarInfoId").add(form);
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
                bar.remove(Ext.getCmp('edit'));
                bar.remove(Ext.getCmp('save'));
                bar.remove(Ext.getCmp('cancel'));
            }
        }
    }
});