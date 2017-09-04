/*
*面板控制
*/
Ext.define('ChuangCai.controller.Panel', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['panel.List'],
        refs: {
            panelImg: 'panelImg',
            //panelHref: 'panelHref',
            //panelList: 'panelList',
            panelWeiBo: 'panelWeiBo',
            panelTelBar: 'panelTelBar'
        },
        control: {
            //panelHref: {
            //    imgTap: function (t, img) {
            //        this.redirectTo('redirec/panelImg');
            //        this.getPanelImg().setData({ img: img });
            //    }
            //},
            panelTelBar: {
                //登录
                login: function () {
                    this.redirectTo('redirec/userLogin');
                },
                //打电话或者发短信
                phone: function (t, btn) {
                    navigator.app.loadUrl(btn.getAttribute('do') + ':' + t.getData().telephone);
                }
            },
            //panelList: {
            //    itemtap: function (list, index, target, record, e) {
            //        this.redirectTo('redirec/' + record.get('redirect'));
            //        var view = record.get('view');
            //        if (view) {
            //            util.dataLoad(Ext.getCmp(view), config.dataUrl);
            //        }
            //    }
            //},
            panelWeiBo: {
                weiBo: function () {
                    //登录检测
                    if (!config.user) {
                        this.redirectTo('redirec/userLogin');
                    } else {
                        util.showPick('ux.WeiboPicker', { title: 'sencha touch Demo(示例)', url: 'http://www.cnblogs.com/mlzs/p/3382229.html' });
                    }
                },
                deactivate: function () {
                    util.endPick('weiboPicker');
                }
            }
        }
    }
});