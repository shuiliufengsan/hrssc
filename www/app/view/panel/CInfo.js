Ext.define('ChuangCai.view.panel.CInfo', {
    alternateClassName: 'panelCInfo',
    extend: 'Ext.Container',
    xtype: 'panelCInfo',
    config: {
        cls: 'info',
        title: 'Container模版',
        tpl: new Ext.XTemplate(
        '<div class="bh tc">',
            '<div class="w3">期数</div><div class="w6">开奖时间</div><div class="w3">礼品</div><div class="bone">中奖号</div>',
        '</div>',
        '<tpl for="mes"><div class="bh tc">',
            '<div class="w3">{id}</div><div class="w6">{time}</div><div class="w3">{gift}</div><div class="bone">{No}</div>',
        '</div></tpl>',
        '<div class="bh mt"><div class="bthree">开奖规则</div><div class="bone">规则介绍></div></div>',
         '<tpl for="mes"><div class="bh">',
            '<div class="w3 tc">{id}期</div>',
            '<div class="bv tf">',
                '<div>参与时间： {begin} 至 {end}</div><div>开奖时间： {time}</div><tpl if="No"><div>中奖号码： {No}</div></tpl>',
                '<tpl if="user"><div>中奖账号： {user}</div></tpl>',
            '</div>',
        '</div></tpl>',
        '<div class="mt">参与调查问卷或推广--->获得幸运号码--->等待开奖--->中奖得礼品</div>'
        ),
        data: {
            mes: [{
                id: '10',
                time: '2013-08-10',
                gift: 'ipad2',
                begin: '2013-07-31',
                end: '2013-08-09'
            },
            {
                id: '09',
                time: '2013-07-31',
                gift: 'ipad2',
                No: 635,
                user: '***张三',
                begin: '2013-07-24',
                end: '2013-07-30'
            }]
        }
    }
});