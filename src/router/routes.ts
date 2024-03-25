import {RouteRecordRaw} from "vue-router"
// import home from '@/views/layout-home/layout-home.vue'
import layout from "@/views/base-layout/base-layout.vue"
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        redirect:{name:"login"},
        component:layout,
        children:[
            {
            path:'/home',
            name:'home',
            component:() => import('@/views/layout-home/layout-home.vue'),
            meta:{name:'首页',icon:'icon-home'}
            },
            {
            path:'/note',
            name:'note',
            redirect:{name:'create'},
            component:() => import('@/views/layout-note/layout-note-main.vue'),
            meta:{name:'笔记',icon:'icon-ziliaoku'},
            children:[
                {
                    path:'/note/create',
                    name:'create',
                    component:()=>import('@/views/layout-note/layout-note-createnote.vue')
                },
                {
                    path:'/note/collection',
                    name:'collection',
                    component:()=>import('@/views/layout-note/layout-note-collection.vue')
                },
                {
                    path:'/note/allnote',
                    name:'allnote',
                    component:()=>import('@/views/layout-note/layout-note-allnote.vue')
                }
            ]
            },
            {
            path:'/reference',
            name:'reference',
            component:() => import('@/views/layout-model/layout-model-main.vue'),
            meta:{name:'模型',icon:'icon-daohang'}
            },
            {
            path:'/authority',
            name:'authority',
            component:() => import('@/views/layout-home/layout-home.vue'),
            meta:{name:'用户管理',icon:'icon-yonghuguanli'}
            },
            {
                path:'/setting',
                name:'setting',
                redirect:{name:'theme'},
                component:()=>import('@/views/layout-setting/layout-setting.vue'),
                meta:{name:'设置',icon:'icon-shezhi-xianxing'},
                children:[
                    {
                        path:'/setting/theme',
                        name:'theme',
                        component:()=>import('@/components/setting-theme.vue')
                    },
                    {
                        path:'/setting/myinfo',
                        name:'myinfo',
                        component:()=>import('@/views/layout-setting/layout-setting-myinfo.vue')
                    }
                ]
            }]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/login.vue')
    }
    
]
export default routes