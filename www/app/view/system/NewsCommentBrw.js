Ext.define('ChuangCai.view.system.NewsCommentBrw', {
    alternateClassName: 'newscommentBrw',
    extend: 'ux.SimpleList',
    xtype: 'newscommentBrw',
    requires: ['ux.plugin.RefreshFn', 'Ext.plugin.ListPaging', 'ux.SimpleList'],
    config: {
        cls: 'list',
        //onItemDisclosure: true,
        //limit:5,
        id: 'newscommentBrwId',
        plugins: ['refreshFn', 'listpaging'],
        title: '评论中心',
        locales: {
            title: 'home.title'
        },
        items: [{
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
        }],
        itemTpl:
            new Ext.XTemplate(
            '<div class="e-box clear">',
            '<tpl if="values.logo ">',
                   // '<div class="face"><img src="resources/images/noface_60x60.jpg" width="50" height="50"></div>',
                    "<tpl else>", '<div class="face"><img src="resources/images/noface_60x60.jpg" width="50" height="50"></div>', "</tpl>",
                    '<div class="info" style="width:' + (document.body.clientWidth - 60 - 30) + 'px">',
                    '<div class="attr clear"><b>{comment_man}</b><em>{comment_datetime}</em></div>',
                    //'<div class="attr clear"><b>{comment_man}</b><div class="star"><span style="width:20px;"></div><em>{comment_datetime}</em></div>',
                    '<tpl if="comment_content">', "<p>{comment_content}</p>",
                    "<tpl else>", "<p>这家伙很懒,什么都没有留下~~~~</p>", "</tpl>",
                    '<tpl if="reply_content"><p class="recon"><span></span>[楼主回复]：{reply_content}</p></tpl>',
                    "</div>",
            "</div>"
            ),
        //'<div class="bh">',
        //    '<div class="img" style="background-image: url(resources/images/noface_60x60.jpg); Width:50px;Height:50px;"></div>',
        //    '<div class="bv">',
        //        '<div class="listTitle">{comment_man}</div>',
        //        '<div class="listSummary">{comment_content}</div>',
        //        '<div class="listPublishDate">{comment_datetime}</div>',
        //        '<div class="star" style="background-image: url(resources/images/noface_60x60.jpg);width:10px;">11111111</div>',
        //    '</div>',

        //'</div>'),
        store: 'newsComment'
        //items: [{
        //}, {
        //    xtype: "panel",
        //    height: "50px",
        //    iconAlign: 'bottom',
        //    layout: "hbox",
        //    id: "bottomAddPanel",
        //    cls: "footer-panel",
        //    style: "z-index: 1",
        //    padding: 10,
        //    items: [{
        //        xtype: "button",
        //        height: "30px",
        //        width: "100px",
        //        id: "GDRSubmitOrder",
        //        margin: "0 auto",
        //        cls: "i-button",
        //        html: "发表评论"
        //    }]
        //}],
    }
});