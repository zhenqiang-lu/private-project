<template>
  <div>
    <el-input placeholder="用户名" v-model="username"></el-input>
    <el-input placeholder="密码" v-model="password"></el-input>
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
      
    }
  };
</script>

<style scoped>

</style>
