//审批中心
Ext.define('ChuangCai.model.system.ApproveCenter', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            //id
            name: 'id',
            type: 'int'
        },
        {
            //标题
            name: 'from_employee_id',
            type: 'string'
        },
         {
             //姓名
             name: 'log_user_name',
             type: 'string'
         },
           {
               //姓名
               name: 'module_code',
               type: 'string'
           },
        {
            //标题
            name: 'module_name',
            type: 'string'
        },
         {
             //标题
             name: 'subject',
             type: 'string'
         },
        {
            //概述
            name: 'msg_body',
            type: 'string'
        },
        {
            //发布日期
            name: 'send_time',
            type: 'string'
        }]
    }
});