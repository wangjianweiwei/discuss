import {createRouter, createWebHistory} from 'vue-router'
import ArticleListView from '../views/ArticleListView.vue'

const routes = [
    {
        path: '/',
        name: 'articles',
        component: ArticleListView,
    },
    {
        path: "/article/editor",
        name: "ArticleEditor",
        component: () => import('../views/ArticleEditorView.vue')
    },
    {
        path: "/article/preview",
        name: "ArticlePreview",
        component: () => import('../views/ArticleEditorView.vue')
    },
    {
        path: '/tools',
        name: 'tools',
        component: () => import(/* webpackChunkName: "about" */ '../views/ToolsListView.vue')
    },
    {
        path: '/demos',
        name: 'demos',
        component: () => import(/* webpackChunkName: "about" */ '../views/DemosListView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
