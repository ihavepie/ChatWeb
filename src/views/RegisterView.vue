<template>
  <form class="table">
    <div class="word">
      <b>Register</b>
    </div>
    <input type="text" id="username" placeholder="输入账号" v-model="FormUsername" @blur="Persistence">
    <input type="password" id="password" placeholder="输入密码" v-model="FormPassword">

    <input type="password" id="repeated" placeholder="重新输入" v-model="FormRepeated">
    <div>
      <router-link to="/login" id="login">Log In</router-link>
      <router-link to="/register" id="register" @click="Register" :class=classes>Register</router-link>
    </div>
  </form>

</template>

<script>
import { request } from "../utils/index";

export default {
  name: 'RegisterView',
  data(){
    return{
      FormUsername: this.$store.state.username,
      FormPassword: '',
      FormRepeated: '',
      classes: {'re-button': true, animate__animated: true},
    }
  },
  methods:{
    Register(){
      this.RegisterFilter()
    },

    RegisterFilter(){
      const RegisterList = []
      if(this.FormUsername === ""){
        RegisterList.push('用户名')
      }
      if(this.FormPassword === ""){
        RegisterList.push('密码')
      }
      if(this.FormRepeated === ""){
        RegisterList.push('重复密码')
      }
      if(RegisterList.length === 0){
        if(this.FormRepeated === this.FormPassword){
          this.Request()
        }
        else if(this.FormRepeated !== this.FormPassword){
          this.$msg.error( '密码不匹配，请重新输入')
          this.FormRepeated = ''
          this.Disable()
        }
      }
      else if(RegisterList.length === 1){
        this.$msg.error( RegisterList[0] + '为空')
        this.Disable()
      }
      else{
        this.$msg.error(RegisterList.join('和') +'为空')
        this.Disable()
      }
    },

    Request(){
      request({
        url:'/Register',
        data: {
          username: this.FormUsername,
          password: this.FormRepeated
        },
      })
          .then(res=>{
            const status = res.data.status
            // 根据对应状态做出响应
            this.State(status)
          })
          .catch(err=>{
            this.$msg.error(err.message)
            this.Disable()
          })
    },

    //
    State(status){
      if(status === 2){
      }
      else if(status === 1){
        this.$Loading('success', '注册成功...跳转至User页面', './user')
      }
      else if(status === 0){
        this.$msg.error('用户名被占用...请重新输入')
        this.FormUsername = ''
        this.Disable()
      }
    },

    // 设置禁止点击样式，按钮和输入框等
    Disable(){
      this.classes['animate__backOutRight'] = true
      this.classes['animate__backInLeft'] = false
      setTimeout(()=>{
        this.classes['animate__backOutRight'] = false
        this.classes['animate__backInLeft'] = true
      },300)
    },

    // 将用户名传入state以及持久化
    Persistence(){
      this.$store.commit("SetUser",this.FormUsername)
    },

  },

}
</script>

<style scoped>

#register{
  position: absolute;
  width: 96px;
  height: 36px;
  bottom: 60px;
  left: 0;
  right: 0;
  margin: auto;
  background: lightgray;
  text-align: center;
  line-height: 36px;
  border-radius: 5px;
  text-decoration: none;
}
#login{
  position: absolute;
  width: 96px;
  height: 36px;
  bottom: 0;
  right: 0;
  text-align: center;
  line-height: 36px;
  border-radius: 5px;
}
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
#repeated{
  position: absolute;
  left: 0;
  right: 0;
  top: 216px;
  margin: auto;
  width: 240px;
  height: 28px;
}

</style>