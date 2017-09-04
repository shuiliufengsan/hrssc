//公司新闻
Ext.define('ChuangCai.model.workflow.Overtime', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'employee_code',
            type: 'string'
        },
        {
            //概述
            name: 'employee_name',
            type: 'string'
        },
        {
            //发布日期
            name: 'begin_overtime',
            type: 'string'
        },
        {
            //发布日期
            name: 'end_overtime',
            type: 'string'
        },
        {
            //发布日期
            name: 'overtime_hour',
            type: 'string'
        },
        {
            //发布日期
            name: 'fee_or_mend',
            type: 'string'
        },
        {
            //发布日期
            name: 'overtime_type',
            type: 'string'
        },
        {
            //发布日期
            name: 'audit_status',
            type: 'string'
        }]
    }
});