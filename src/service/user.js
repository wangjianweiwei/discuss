import axios from "@/request/axios"

export function getUserInfo() {
    return axios.get('user')
}

export function getArticles() {
    return axios.get('articles')

}

export function getArticle(pk) {
    return axios.get(`article/${pk}`)
}


export function updateArticle(id, content) {
    return axios.put(`article/${id}`, {content: content})
}