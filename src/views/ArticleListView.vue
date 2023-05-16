<template>
    <div class="home">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Title">
                <template #default="scope">
                    <router-link :to="{ name:'ArticleEditor', query:{ pk:scope.row.id } }">
                        <strong>{{ scope.row.title }}</strong>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="create_at" label="CreateAt"/>
            <el-table-column prop="category.title" label="Category"/>
            <el-table-column prop="update_at" label="UpdateAt"/>
        </el-table>
    </div>
</template>

<script setup>
import {getArticles} from "@/service/user";
import {ref} from "vue";

let tableData = ref([])
getArticles().then(response => {
    tableData.value = response.data
})

</script>



