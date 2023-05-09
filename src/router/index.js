import {createRouter, createWebHashHistory} from 'vue-router'
import Article from '../views/ArticleListView.vue'

const routes = [
    {
        path: '/',
        name: 'articles',
        component: Article
    },
    {
        path: '/tools',
        name: 'tools',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ToolsListView.vue')
    },
    {
        path: '/demos',
        name: 'demos',
        component: () => import(/* webpackChunkName: "about" */ '../views/DemosListView.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../views/ArticleView.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
