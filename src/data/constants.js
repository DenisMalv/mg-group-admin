export const USER_ROLES = [
    {
        name:'Власник бізнесу',
        role:'owner'
    },
    {
        name:'Адміністратор',
        role:'admin'
    },
    {
        name:'Модератор',
        role:'moderator'
    },
]

export const BREAD_CRUMBS = [

    {
        url:'dashboard',
        values:[
            {
                name:'Дашборд',
                link:'/dashboard'
            },
        ]
    },
    {
        url:'content',
        values:[
            {
                name:'Контент',
                link:'/content'
            },
        ]
    },
    {
        url:'calculation',
        values:[
            {
                name:'Калькуляція',
                link:'/calculation'
            },
        ]
    },
    {
        url:'users',
        values:[
            {
                name:'Користувачі',
                link:'/users'
            },
        ]
    },
    {
        url:'security',
        values:[
            {
                name:'Безпека',
                link:'/security'
            },
        ]
    },
    {
        url:'support',
        values:[
            {
                name:'Підтримка',
                link:'/support'
            },
            ]
    }
]