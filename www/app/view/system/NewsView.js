Ext.define('ChuangCai.view.system.NewsView', {
    alternateClassName: 'newsView',
    extend: 'Ext.Panel',
    xtype: 'newsView',
    requires: ['ux.plugin.ConHref', 'ChuangCai.view.panel.Img'],
    config: {

        id: 'newsView',
        title: '新闻内容',
        plugins: 'conHref',
        style: "background-color:#ffffff",
        items: [{
            xtype: "panel",
            id: "appearCommentContent",
            height: document.body.clientHeight - 45,
            iconAlign: 'top',
            layout: "hbox",
            cls: 'info',
        }, {
            xtype: "textfield",
            height: "10px",
            docked: 'bottom',
            hidden: true,
            id:"loadNewsId"
        }, {
            xtype: "panel",
            height: "45px",
            iconAlign: 'bottom',
            docked: 'bottom',
            layout: "hbox",
            id: "bottomAddPanel",
            //cls: "footer-panel",
            //style: "z-index: 1",
            style: "background-color:#ffffff;border-top:1px solid #EDEDED;",
            items: [{
                //xtype: "button",
                //height: "30px",
                //width: "100px",
                //id: "GDRSubmitOrder",
                //margin: "0 auto",
                //cls: "i-button",
                //html: "发表评论"
                xtype: 'image',
                height: '45px',
                width: '40px',
                cls: "i-comment-icon"
            }, {
                xtype: 'textfield',
                itemId: 'comment_content_box',
                id: 'comment_content_box',
                height: '45px',
                margin: 0,
                cls: "i-comment-text",
                clearIcon: false,
                placeHolder: "写跟帖",
                width: document.body.clientWidth - 80,
            }, {
                xtype: 'image',
                itemId: 'comment_send_box',
                height: '45px',
                width: '40px',
                cls: "i-comment-send-icon"
            }]
        }]
    }
});