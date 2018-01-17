
<style>
  .pwd{
    margin-top:30px;
  }
</style>
<template>
	<div class = "found">
		<p v-bind:title="message">I CAN FOUND YOU ANYWHERE!!!</p>
    <div>{{fullname}}</div>
	</div>
</template>
<script>
export default {
  name: 'found',
  data () {
    return {
      username: 'kaily',
      password: '123456',
      firstname: 'jeo',
      lastname: 'bob',
      message: 'I CAN FOUND YOU ANYWHEERE!!!'
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
