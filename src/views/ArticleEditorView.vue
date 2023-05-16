<template>
    <el-button type="primary" @click="save">Save</el-button>
    <el-button type="info" @click="save">Preview</el-button>
    <el-button type="warning" @click="save">Back</el-button>
    <div id="vditor"/>
</template>

<script setup>

import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
// import {ElMessage} from 'element-plus'
import Vditor from "vditor";
import 'vditor/dist/index.css'


import {getArticle, saveArticle} from "@/service/user";


let id = ref(null)
const vditor = ref(null)


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
        after: () => {
            vditor.value.setTheme("classic", "light", "monokai")
            getArticle(id.value).then((response) => {
                vditor.value.setValue(response.data.content)
            })
        }
    })

})


function save() {
    let content = vditor.value.getValue()
    console.log(content)
    saveArticle(id.value, content).then((response) => {
        console.log(response)
    })
}

</script>

<style>

</style>


