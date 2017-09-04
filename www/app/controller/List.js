/*
*列表控制
*/
Ext.define('ChuangCai.controller.List', {
    extend: 'Ext.app.Controller',
    //requires: ['ChuangCai.view.system.NewsView'],
    config: {
        models: ['Blog', 'Quiz', 'Used'],
        stores: ['BlogList', 'QuizList', 'UsedList'],
        views: ['list.Home', 'list.Used'],
        refs: {
            listHome: 'listHome',
            listUsed: 'listUsed'
        },
        control: {
            listHome: {
                itemtap: function (list, index, target, record, e) {
                    this.redirectTo('redirec/' + record.get('redirect'));
                    util.storeLoad(record.get('store'));
                }
            },
            listUsed: {
                itemsingletap: function (list, index, target, record, e) {
                    //util.showMessage(record.data.content);
                    //                    this.redirectTo('newInfo');
                    //                    MyUtil.showInfo(record, 'newInfo', 'NewInfo.ashx', 'body', {
                    //                        id: record.data.id
                    //                    });
                },
                //结束多选事件触发
                simpleSuccess: function (list, items, ids, type) {
                    console.log(ids);
                }
                //                itemtap: function(list, index, target, record, e) {
                //                    record.data.name = '修改',
                //                    record.save({ success: function(a, b) {
                //                        console.log('成功');
                //                    }, failure: function(a, b) {
                //                        console.log('失败');
                //                    }
                //                    }, this);
                //                }
            },
            humanHome: {
                itemtap: function (list, index, target, record, e) {
                    if (index == 0) {
                        this.redirectTo('redirec/humanInfo');
                    }
                }
            }
        }
    }
});