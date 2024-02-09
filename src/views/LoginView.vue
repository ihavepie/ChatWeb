<script setup>


</script>
<template>
  <form class="table">
    <div class="word">
      <b>Login</b>
    </div>
    <input type="text" id="username" placeholder="输入账号" v-model="FormUsername" @blur="Persistence">
    <input type="password" id="password" placeholder="输入密码" v-model="FormPassword">
    <div>
      <router-link to="/login" id="login" @click="Login" :class=classes>Log In</router-link>
      <router-link to="/register" id="register">Register</router-link>
    </div>
  </form>
</template>


<script>
import { request } from "../utils/index";

export default {
  name: 'LoginView',
  data(){
    return{
      FormUsername: this.$store.state.username,
      FormPassword: "",
      classes:{'re-button': true, animate__animated: true},
    }
  },
  methods:{

    // Login()函数, 需要重构除去冗余代码
    Login(){
      this.LoginFilter()
    },

    LoginFilter(){
      const LoginList = []
      if(this.FormUsername === ""){
        LoginList.push('用户名')
      }
      if(this.FormPassword === ""){
        LoginList.push("密码")
      }
      // 查询列表中的错误
      if (LoginList.length === 0){
        this.Request()
      }
      else if(LoginList.length === 1){
        this.$msg.error( LoginList[0] + '为空')
        this.Disable()
      }
      else if(LoginList.length === 2){
        this.$msg.error(LoginList.join('和') +'为空')
        this.Disable()
      }
    },

    // 发送请求
    Request(){
      request({
        // 接口发送地址
        url:'/Login',
        data:{
          // 传入表单输入的用户名和密码
          username:this.FormUsername,
          password:this.FormPassword,
        }
      })
          .then(res=>{
            // 获取接口状态
            const status = res.data.status
            // 根据对应状态做出响应
            this.State(status)
          })
          // 错误捕获
          .catch(err=>{
            this.$msg.error(err.message)
            this.Disable()
          })
    },

    // 接收state，根据不同state做出相应行为
    State(status){
      // 数据库中无该用户，跳转至注册页面
      if (status === 0){
        this.$Loading('error', '用户不存在...跳转至Register页面', './register')
      }
        // 登陆成功，跳转至登陆页面
      else if (status === 1){
        this.$Loading('success', '登陆成功...跳转至User页面', './user')
      }
      // 登陆失败，清空并重新输入
      else if (status === 2){
        this.FormPassword = ''
        this.$msg.error('密码错误...请重新输入')
      }
    },

    // 将用户名传入state以及持久化
    Persistence(){
      this.$store.commit("SetUser",this.FormUsername)
    },

    // 设置禁止行为和样式
    Disable(){
      this.classes['animate__backOutRight'] = true
      this.classes['animate__backInLeft'] = false
      setTimeout(()=>{
        this.classes['animate__backOutRight'] = false
        this.classes['animate__backInLeft'] = true
      },300)
    },
  },
}
</script>


<style scoped>

#username{
  position: absolute;
  left: 0;
  right: 0;
  top: 96px;
  margin: auto;
  width: 240px;
  height: 28px;

}
#password{
  position: absolute;
  left: 0;
  right: 0;
  top: 156px;
  margin: auto;
  width: 240px;
  height: 28px;
}
#register{
  position: absolute;
  width: 96px;
  height: 36px;
  bottom: 0;
  right: 0;
  text-align: center;
  line-height: 36px;
  border-radius: 5px;
}

</style>