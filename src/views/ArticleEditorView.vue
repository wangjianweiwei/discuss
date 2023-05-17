<template>
    <el-button type="primary" @click="save">Save</el-button>
    <el-button type="info" @click="save">Preview</el-button>
    <el-button type="warning" @click="save">Back</el-button>
    <div id="vditor" v-loading="loading"/>
</template>

<script setup>

import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {ElMessage} from 'element-plus'
import Vditor from "vditor";
import 'vditor/dist/index.css'


import {getArticle, saveArticle} from "@/service/user";


const id = ref(null)
const vditor = ref(null)
const loading = ref(false)


onMounted(() => {
    const route = useRoute()
    id.value = route.query.pk

    vditor.value = new Vditor('vditor', {
        cache: {enable: false},
        icon: "material",
        width: "100%",
        height: 360,
        counter: {enable: true},
        placeholder: "总要写点什么吧!",
        typewriterMode: true,
        value: "",
        tab: "    ",
        preview: {
            hljs: {
                lineNumber: true
            }
        },
        upload: {
            accept: 'image/*,.mp3, .wav, .rar',
            url: 'http://localhost:7777/article/media/upload',
            linkToImgUrl: '/api/upload/fetch'
        },
        after: () => {
            vditor.value.setTheme("classic", "light", "monokai")
            getArticle(id.value).then((response) => {
                vditor.value.setValue(response.data.content)
            })
        }
    })

})


function save() {
    loading.value = true
    let content = vditor.value.getValue()
    console.log(content)
    saveArticle(id.value, content).then(() => {
        loading.value = false
        ElMessage({
            message: "保存成功",
            type: "success"
        })
    }).catch(() => {
        ElMessage({
            message: "保存失败",
            type: "success"
        })
    })
}

</script>

<style>

</style>


