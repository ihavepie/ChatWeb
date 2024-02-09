<template>

  <div class="main">
    <div class="affair" style="background: #79bbff">a</div>
    <div class="workplace" style="background: #d1edc4">
      <h1>Welcome:{{this.username}}</h1>



    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserView",
  data(){
    return{
    }
  },
  methods:{
    func(){
    },
    fun(){
      if(this.username === ""){
      }
    }
  },
  computed:{
    ...mapState(['username'])
  },
  created(){
    this.$localforage.getItem('username').then(value => {
      console.log(value)
      this.$store.commit("SetUser", value)
    })

  }
}
</script>

<style scoped>

</style>