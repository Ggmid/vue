<template>
  <div class="parent">
    <h1>父组件</h1>
    <Child v-on:childToParentMsg="showChildToParentMsg" ></Child>
  </div>
</template>
<script>
export default {
  import Child from './Child.vue'
  name: 'parent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showChildToParentMsg:function(data){
      alert("父组件显示信息："+data);
    }
  },
  components: {Child}
}
</script>
