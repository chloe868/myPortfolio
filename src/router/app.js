export default {
    routes: [{
        path: '/Home',
        name: 'home',
        component: resolve => require(['@/modules/aboutMe.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Resume',
        name: 'resume',
        component: resolve => require(['@/modules/resume.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Projects',
        name: 'projects',
        component: resolve => require(['@/modules/projects.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Contact',
        name: 'contact',
        component: resolve => require(['@/modules/contact.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    }
]
}








