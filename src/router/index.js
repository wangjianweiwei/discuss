import {createRouter, createWebHistory} from 'vue-router'
import ArticleListView from '../views/ArticleListView.vue'

const routes = [
    {
        path: '/',
        name: 'articles',
        component: ArticleListView,
    },
    {
        path: "/content/editor",
        name: "ArticleEditor",
        component: () => import('../views/ArticleEditorView.vue')
    },
    {
        path: "/content/preview",
        name: "ArticlePreview",
        component: () => import('../views/ArticleEditorView.vue')
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
