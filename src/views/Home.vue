<template>
    <div class="main-container">
        <el-container>
            <el-header height="50px"></el-header>
            <el-container mode="horizontal">
                <el-aside width="250px"></el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
</style>