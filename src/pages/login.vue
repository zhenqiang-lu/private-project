<template>
  <div>
      <div class="login-box">
          <span>WEB IPCAMERA</span>
          <el-input class="msg-input" placeholder="用户名" v-model="username"></el-input>
          <el-input class="msg-input" placeholder="密码" v-model="password"></el-input>
          <el-button  class="msg-btn" @click="login" type="primary">登录</el-button>
      </div>
    
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
          if(!sendData.username || !sendData.password){
              this.$message.error("请输入用户名和密码！")
              return;
          }
          login(sendData).then(res => {
              this.$message.success(JSON.stringify(res))
          })
      }
    }
  };
</script>

<style scoped>
.login-box{
    border-radius: 9px;
    background: #EDEDED;
    padding: 10px 30px;
    text-align: center;
    width: 400px;
    margin: 10% auto 0;
    box-shadow: 10px 10px 10px #EDEDED;
}
.login-box span{
    font-size: 32px;
    line-height: 60px;
}
.msg-input{
    margin-bottom: 20px;
}
</style>
