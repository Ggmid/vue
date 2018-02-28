<template>
	<el-menu :default-active="getRouter" class="el-menu-demo" mode="horizontal"  text-color="#fff" active-text-color="#ffd04b" router>
	  <el-menu-item index="choice">精选</el-menu-item>
	  <el-menu-item index="rank">排行</el-menu-item>
	  <el-menu-item index="song">歌单</el-menu-item>
	  <el-menu-item index="singer">歌手</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
        data () {
        	return {
        		
        	}
        },
        computed: {
        	getRouter () {
        		console.log(this.$route.path);
        		return this.$route.path.replace('/','');
        	}
	    }
    }
</script>

<style>

</style>