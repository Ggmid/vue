<template>
	<div class="homeBox">
		<navBar></navBar>
		<router-view></router-view>
		<div class="navBottom">此实例仅供个人娱乐</div>
	</div>
</template>

<script>
	import navBar from './navBar'
	export default {
        components:{
            navBar
        }
    }
</script>

<style>
	.homeBox{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	.navBottom{
		width:100%;
		height:60px;
		position:absolute;
		bottom:0;
		background:#eef1f6;
		text-align: center;
		line-height: 60px;
	}
</style>