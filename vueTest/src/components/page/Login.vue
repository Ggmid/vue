
<template>
	<div class="formBox">
			<el-form label-width="0px" class="demo-ruleForm">
		    <el-form-item >
		        <el-input v-model="username" placeholder="username"></el-input>
		    </el-form-item>
		    <el-form-item>
		        <el-input type="password" placeholder="password" v-model="password" ></el-input>
		    </el-form-item>
		    <div class="login-btn">
		        <el-button type="primary" @click="login">登录</el-button>
		    </div>
			</el-form>
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
      login: function () {
        this.$router.push('./home')
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
	.formBox{
		width: 100%;
		height: 100%;
		background: #4a6969;
	}
	.demo-ruleForm{
		width:200px;
		position: relative;  
 		top: 50%;  
 		transform: translateY(-50%);
 		left: 45%;
	}
   .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
