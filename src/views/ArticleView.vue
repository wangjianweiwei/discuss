<template>
    <div class="home">
        <el-button type="success" @click="save">Save</el-button>
        <QuillEditor theme="snow" v-model:content="contentDelta" @textChange="textChange"/>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {QuillEditor, Delta} from '@vueup/vue-quill'
import {getArticle, updateArticle} from "@/service/user";


let contentDelta = ref(new Delta([]))
let id = ref(null)

function textChange(change) {
    console.log(change)
    console.log(contentDelta.value.ops)
}

onMounted(() => {
    const route = useRoute()
    id.value = route.query.pk
    getArticle(id.value).then((response) => {
        contentDelta.value = new Delta(response.data.content)
    })

})


function save() {
    updateArticle(id.value, contentDelta.value)
}

</script>



