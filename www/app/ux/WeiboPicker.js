/*
*分享到微博
*/
Ext.define('ux.WeiboPicker', {
    extend: 'Ext.Picker',
    xtype: 'weiboPicker',
    config: {
        toolbar: {
            ui: 'light',
            title: '分享到'
        },
        value: {
            weibo: 'sinaminiblog'
        },
        slots: [{
            name: 'weibo',
            data: [{
                text: '新浪微博',
                value: 'sinaminiblog'
            },
            {
                text: '人人网',
                value: 'renren'
            }]
        }],
        //分享到参数
        weiboParams: null
    },
    /*显示分享到微博参数格式{url:url,title:title,summary:summary,publisherUuid:publisherUuid,pic:pic}
    *url为必填项，必须为以下格式 http://www.baidu.com
    * 具体参考http://www.bshare.cn/help/apiRedirect
    */
    show: function (params) {
        this.setWeiboParams(params);
        this.callParent(arguments);
    },
    //确定
    onDoneButtonTap: function () {
        var params = this.getWeiboParams();
        var url = 'http://api.bshare.cn/share/' + this.getValue().weibo + '?1=1';
        for (var item in params) {
            var value = params[item];
            if (item == 'url') {
                value = escape(value); //转码特殊符号防止url中包含参数
            }
            url = url + '&' + item + '=' + value; 
        }
        window.open(url, '_system');
        this.endPick();
    },
    //取消
    onCancelButtonTap: function () {
        this.endPick();
    },
    //销毁
    endPick: function () {
        this.hide();
        this.destroy();
    }
});