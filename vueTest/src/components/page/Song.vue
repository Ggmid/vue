<template>
	<div>
		<h1>This is a TODO</h1>
		<input type='text' v-model="items" @keyup.enter="addItem(items)">
		<p>{{items}}</p>
		<ul>
			<li v-for='(item,i) in list' :key='i'>
				<span :class='{red : item.isRed}' @click="toggleRed(item)">{{item.item}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Store from '../../store/store';
	export default {
		data () {
			return {
				items: '',
				list: Store.fetch()
			}
		},
		watch: {
			list: {
				handler (list) {
					Store.save(list);
				},
				deep: true
			}
		},
		methods: {
			addItem (item) {
				this.list.push({item:item});
				this.items = '';
			},
			toggleRed (item) {
				item.isRed = !item.isRed;
			}
		}
	}
</script>

<style>
	ul li{
		list-style: none;
	}
	.red{
		color: red;
	}
</style>