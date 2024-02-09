<template>

  <div class="aside">
    <div class="user">
      <router-link to="setting" class="UserIcon"></router-link>
    </div>
    <div class="function">
      <RouterLink to="/home" class="IconHome">Home</RouterLink>
      <br>
      <RouterLink to="/cancel" class="IconCancel">Cancel</RouterLink>
      <br>
      <RouterLink to="/cancel" class="IconUndo1">Undo1</RouterLink>
      <br>
      <RouterLink to="/cancel" class="IconUndo2">Undo2</RouterLink>
    </div>
  </div>

</template>


<script>
import { RouterLink } from 'vue-router'
export default {
  name: "Aside",
}
</script>


<style scoped>
.user{
  position: absolute;
  width: 10vh;
  height: 10vh;
  left: 1vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow: 3px 3px 1px 1px gainsboro;
}
.function{
  position: absolute;
  top: 15vh;
  bottom: 15vh;
  height: 70vh;
  width: 10vh;
  left: 1vh;
  border-radius: 10px;
  box-shadow: 3px 3px 4px 4px gainsboro;
  background: rgba(245, 245, 245, 0.99);
}
.IconUser{
  position: absolute;
  top: 1vh;
  left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow: 3px 3px 1px 1px gainsboro;
}
.IconHome{
  position: absolute;
  top: 10vh;
  left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow:  3px 3px 1px 1px gainsboro;
}
.IconCancel{
  position: absolute;
  top: 19vh;
  left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow:  3px 3px 1px 1px gainsboro;
}
.IconUndo1{
  position: absolute;
  top: 28vh;
  left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow:  3px 3px 1px 1px gainsboro;
}
.IconUndo2{
  position: absolute;
  top: 55vh;
  left: 1vh;
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  background: #d0cccc;
  box-shadow:  3px 3px 1px 1px gainsboro;
}
</style>