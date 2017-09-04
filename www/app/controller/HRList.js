Ext.define('ChuangCai.controller.HRList', {
    extend: 'Ext.app.Controller',
    config: {
        //models: ['Blog', 'Quiz', 'Used', 'News'],
        //stores: ['BlogList', 'QuizList', 'UsedList','system.News'],
        views: ['human.Home', 'attend.Home', 'attend.MobileAttend'],
        refs: {
            navBtn: 'button[action=navBtn]',
            humanHome: 'humanHome'//,
            //RMap: '#MobileAttend'
        },
        control: {
            //导航栏按钮
            navBtn: {
                tap: function () {
                    util.showMessage('我是导1航栏按钮，在当前激活的子项中配置-_-', true);
                }
            },
            humanHome: {
                itemtap: function (list, index, target, record, e) {
                    if (index == 0) {
                        this.redirectTo('redirec/humanInfo');
                    }
                }
            },
            attendHome: {
                itemtap: function (list, index, target, record, e) {
                    if (index == 0) {
                        this.redirectTo('redirec/MobileAttend');
                        //Ext.create("ChuangCai.view.attend.RMap");
                    }
                    if (index == 1) {
                        this.redirectTo('redirec/AttendInfo');
                    }
                }
            },
            RMap: {
                activate: "RMapShow"
            }
        },
        RMapShow: function () {
            var map = new BMap.Map('map');//指向map的容器
            map.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
            window.setTimeout(function () {
                map.panTo(new BMap.Point(116.409, 39.918));
            }, 2000);
        }
    }
});