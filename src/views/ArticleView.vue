<template>
    <QuillEditor theme="snow" :options="quillOptions" v-model:content="contentDelta"
                 @textChange="textChange"/>
</template>

<script setup>

import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import {ElMessage} from 'element-plus'
import {QuillEditor, Delta} from '@vueup/vue-quill'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'


import {getArticle, updateArticle} from "@/service/user";


let quillOptions = ref({
    modules: {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value
        },
    },
})
let contentDelta = ref(new Delta([]))
let id = ref(null)

function textChange(change) {
    console.log(change)
    console.log(contentDelta.value.ops)
}

/*
* 使用快捷键进行保存
* */
function shortcutSave(event) {
    if (event.keyCode === 83 && event.ctrlKey) {
        save()
        ElMessage({
            message: '保存成功',
            type: 'success',
        })
    }
}

/*
* */
function save() {
    updateArticle(id.value, contentDelta.value)
}

onMounted(() => {
    document.addEventListener('keydown', shortcutSave)
    const route = useRoute()
    id.value = route.query.pk
    getArticle(id.value).then((response) => {
        contentDelta.value = new Delta(response.data.content)
    })

})


</script>

<style>

</style>


