<template>
  <div class = "found">
    <div class = "name btn">
      <span class="label">用户名：</span>
      <input type="text" name="" v-model="username">
    </div>
    <div class="pwd">
      <span class="label">密码：</span>
      <input type="password" name="" v-model="password">
      <div>{{password}}</div>
    </div>
    <div class="btn">
      <router-link to="/parent"><button>登录</button></router-link>
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
      submit: function () {
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
    overflow:hidden;
  }
  .btn{
    margin-top:30px;
    overflow:hidden;
  }
  .found{
    width:100%;
    height:100%;
    background: url(../assets/banner.jpg) no-repeat center; 
    background-size: cover;
    overflow:hidden;
  }
  .label{

  }
  input{
    line-height: 3;
    border-radius: 5px;
    border:none;
    outline:none;
  }
</style>
