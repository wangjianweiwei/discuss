<template>
    <div class="home">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Title">
                <template #default="scope">
                    <router-link :to="{ name:'article', query:{ pk:scope.row.id } }">
                        <a href="">{{ scope.row.title }}</a>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="create_at" label="Create_at"/>
            <el-table-column prop="category.title" label="Category"/>
            <el-table-column prop="update_at" label="UpdateAt" width="120"/>
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



