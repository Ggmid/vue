<template>
	<div>
		<el-row :gutter="40" class='listBox'>
		  	<el-col :span="6" v-for='(items,i) in topList' :key='i'>
		  		<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>{{items.title}}</span>
						<el-button style="float: right; padding: 3px 0" type="text">播放</el-button>
					</div>
					<div v-for="(list,j) in items.upList" :key="j" class="text item">
						<div class="clearfix">
							<span class="left">{{(j+1)+'、'}}</span>
							<span class="left">{{list.name}}</span>
							<span class="right">{{list.author}}</span>
						</div>
					</div>
				</el-card>
		  	</el-col>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {
				topList: [
					{
						title: '飙升榜',
						upList: [
							{name: '一眼万年',author: '林俊杰'},
							{name: '小酒窝',author: '林俊杰'},
							{name: '醉赤壁',author: '林俊杰'},
							{name: '被风吹过的夏天',author: '林俊杰'},
							{name: '只对你说',author: '林俊杰'},
							{name: '背对背拥抱',author: '林俊杰'},
							{name: '手心的蔷薇',author: '林俊杰'},
							{name: '不为谁而做的歌',author: '林俊杰'}
						]
					},
					{
						title: '新歌榜',
						upList: [
							{name: '佛系少女',author: '冯提莫'},
							{name: '玻璃糖',author: '徐梦圆/冯提莫'},
							{name: '离人愁',author: '李袁杰'},
							{name: 'Papillon',author: '王嘉尔'},
							{name: '盲目自信',author: '郁可唯'},
							{name: '爱不得',author: '杨宗纬'},
							{name: '山还是山',author: '陈鸿宇'},
							{name: '只若初见',author: '张力夫'}
						]
					},
					{
						title: '热歌榜',
						upList: [
							{name: '空空如也',author: '任然'},
							{name: '白羊',author: '徐秉龙/沈以诚'},
							{name: 'BINGBIAN病变',author: 'Cubi'},
							{name: '等你下课',author: '周杰伦'},
							{name: '说散就散',author: '袁维娅'},
							{name: '广东爱情故事',author: '广东雨神'},
							{name: '最美的期待',author: '周笔畅'},
							{name: '我梦见你梦见我',author: '林宥嘉'}
						]
					},
					{
						title: '原创榜',
						upList: [
							{name: '山还是山',author: '陈鸿宇'},
							{name: '末日之前',author: '徐秉龙/沈以诚'},
							{name: '暴风雨',author: 'Cubi'},
							{name: '他说他非常爱你',author: '周杰伦'},
							{name: '说散就散',author: '袁维娅'},
							{name: '广东爱情故事',author: '广东雨神'},
							{name: '最美的期待',author: '周笔畅'},
							{name: '我梦见你梦见我',author: '林宥嘉'}
						]
					}
				]	
			}
		},
		created () {
			console.log(this.topList);
		}
	}
</script>

<style>
	.listBox{
		padding: 30px 80px;	
	}
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>