<template>
  <div>
    <el-input placeholder="用户名" v-model="username"></el-input>
    <el-input placeholder="密码" v-model="password"></el-input>
    <el-button @click="login" type="primary">登陆</el-button>
  </div>
</template>

<script>
  import {
    login
  } from "@/api/api";

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: ''
      };
    },
   
    methods: {
      login() {
          let sendData = {
              username: this.username,
              password: this.password
          }
          login(sendData).then(res => {
              // console.log(res)
              
          })
      }
    }
  };
</script>

<style scoped>

</style>
