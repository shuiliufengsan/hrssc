Ext.define('ChuangCai.store.QuizList', {
    extend: 'Ext.data.Store',
    config: {
        model: 'ChuangCai.model.Quiz',
        storeId: 'quizList',
        data: [{
            log: '',
            title: '上网行为调查',
            integral: 20,
            winning: 2,
            count: 100,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        },
        {
            log: '',
            title: '个人消费调查',
            integral: 10,
            winning: 1,
            count: 100,
            qCount: 20,
            post: 'xx公司',
            log: 'resources/images/weather/n20.gif'
        },
        {
            log: '',
            title: 'xxx公司产品调查',
            integral: 10,
            winning: 1,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        },{
            log: '',
            title: '个人信息调查',
            integral: 50,
            winning: 5,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        }, {
            log: '',
            title: '个人信息调查5',
            integral: 50,
            winning: 5,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        }, {
            log: '',
            title: '个人信息调查6',
            integral: 50,
            winning: 5,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        }, {
            log: '',
            title: '个人信息调查7',
            integral: 50,
            winning: 5,
            qCount: 20,
            log: 'resources/images/weather/n20.gif'
        }]
    }
});