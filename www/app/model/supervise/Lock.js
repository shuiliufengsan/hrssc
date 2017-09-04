Ext.define('ChuangCai.model.supervise.Lock', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'string'
        },
        {
            //报告人
            name: 'report_man',
            type: 'string'
        },
        {
            //问题描述
            name: 'station_name',
            type: 'string'
        },
        {
            //站点
            name: 'status_text',
            type: 'string'
        },
        {
            //状态
            name: 'find_time',
            type: 'string'
        },
        {
            //日期
            name: 'problem_desc',
            type: 'string'
        }]
    }
});