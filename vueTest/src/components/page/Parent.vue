<template>
  <div class="parent">
    <h1>父组件</h1>
    <div>{{msg}}</div>
    <Child @childToParentMsg="getData" ></Child>
  </div>
</template>
<script>
import Child from './Child'
export default {
  name: 'parent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData: function (data) {
      this.msg = data
      alert('父组件显示信息：' + data)
    }
  },
  components: {Child}
}
</script>
