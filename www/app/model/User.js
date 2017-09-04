//用户
Ext.define('ChuangCai.model.User', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.JsonP'],
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'companyid',
            type: 'string'
        },
        {
            name: 'userid',
            type: 'string'
        },
        {
            name: 'usercode',
            type: 'string'
        },
        {
            name: 'username',
            type: 'string'
        },
        {
            name: 'empid',
            type: 'string'
        },
        {
            name: 'password',
            type: 'string'
        }],
        validations: [
        {
            field: 'password',
            type: 'presence',
            message: '请输入密码!'
        }, {
            field: 'username',
            type: 'presence',
            message: '请输入用户名!'
        }],
        proxy: {
            type: 'localstorage',
            id: 'login-data'
        }
    }
});