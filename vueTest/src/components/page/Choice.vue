<template>
	<el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  	</el-carousel>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl:[]
			}
		}
	}
</script>

<style>
</style>