
<template>
  <div class = "found">
    <div class = "name">
      <span>用户名：</span>
      <input type="text" name="" v-model="username" @click="fuck">
    </div>
    <div class="pwd">
      <span>密码：</span>
      <input type="password" name="" v-model="password">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        username: 'kaily',
        password: '123456',
        firstname: 'jeo',
        lastname: 'bob'
      }
    },
    methods: {
      fuck: function () {
        alert(1)
      }
    },
    wacth: {

    },
    computed: {
      fullname: function () {
        return this.firstname + 'dsghj' + this.lastname
      }
    }

  }
</script>

<style scoped>
  .pwd{
    margin-top:30px;
  }
  .btn{
    margin-top:30px;
  }
</style>
