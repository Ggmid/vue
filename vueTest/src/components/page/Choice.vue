<template>
	<div>
		<el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="(item,key) in banner" :key='key'>
		      <img :src='item.imgUrl' />
		    </el-carousel-item>
	  	</el-carousel>
	  	<div class='titleBar'>
	  		<span>推荐歌单</span>
	  	</div>
	  	<div class="albumList">
	  		<el-row :gutter="20">
			  	<el-col :span="4" v-for='(album,key) in albumList' :key='key'>
			  		<div class="grid-content bg-purple">
			  			<img :src='album.albumUrl'/>
			  		</div>
			  		<span>{{album.title}}</span>
			  	</el-col>
			</el-row>
	  	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				banner: [
					{imgUrl: './static/img/img1.jpg'},
					{imgUrl: './static/img/img2.jpg'},
					{imgUrl: './static/img/img3.jpg'},
					{imgUrl: './static/img/img4.jpg'},
					{imgUrl: './static/img/img5.jpg'},
					{imgUrl: './static/img/img6.jpg'}
				],
				albumList: [
					{title: '激情',albumUrl: './static/img/img1.jpg'},
					{title: '温柔',albumUrl: './static/img/img2.jpg'},
					{title: '流行',albumUrl: './static/img/img3.jpg'},
					{title: 'R&B',albumUrl: './static/img/img4.jpg'},
					{title: '古典',albumUrl: './static/img/img5.jpg'},
					{title: '嘻哈',albumUrl: './static/img/img5.jpg'}
				]
			}
		}
	}
</script>
<style>
	.titleBar{
		text-align: left;
		margin:0 15px;
		border-bottom: 1px solid #eae6e6;
		line-height: 30px;
		font-family: "微软雅黑";
	}
	.albumList{
		margin:0 15px;
		margin-top: 20px;
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      	margin-bottom: 0;
		}
	}
	.el-col {
	    border-radius: 4px;
	}
	.bg-purple-dark {
	    background: #99a9bf;
	}
	.bg-purple {
	    background: #d3dce6;
	}
	.bg-purple-light {
	    background: #e5e9f2;
	}
	.grid-content {
	    border-radius: 4px;
	    height: 180px;
	}
	.grid-content img{
		width: 100%;
		height: 100%;
	}
	.row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	}
</style>