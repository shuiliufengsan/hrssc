//公司新闻
Ext.define('ChuangCai.model.supervise.Evaluation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //站点名称 
            name: 'station_name',
            type: 'string'
        },
        {
            //  考核项目 
            name: 'deduct_rule_name',
            type: 'string'
        },
        {
            // 扣分
            name: 'deduct_scroe',
            type: 'string'
        },
        {
            //发生时间 
            name: 'happen_time',
            type: 'string'
        },
        {
            // 解决时间
            name: 'resolve_time',
            type: 'string'
        },
        {
            // 考核人
            name: 'evaluation_man',
            type: 'string'
        },
        {
            // 考核时间
            name: 'evaluation_date',
            type: 'string'
        },
        {
            // 发生时长（分钟）
            name: 'minute',
            type: 'string'
        },
        {
            //说明
            name: 'evaluation_source_text',
            type: 'string'
        }]
        
    }
});