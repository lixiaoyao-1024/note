<template>
  <div class="screen">
      <div class="left" :class="textlist.length%2==0?'r':'l'">
        <span v-for="(item,index) in textlist" :key="index"  class="t">
          {{ item }}
          <br />
        </span>
      </div>
      <div class="right">
          
         
      </div>
      
  </div>
  <div class="input">
              <el-input  class="inputStyle"  placeholder="Please input your problem" v-model="text" />
              <el-button @click="send">send</el-button>
      </div>
</template>

<script lang="ts" setup>
 import { ref,reactive } from 'vue'
 const text = ref('')
 const textlist = reactive([])


// /** 发送消息的方法 */
function send() {
  textlist.push(text.value)
  console.log(textlist.length);
}

</script>

<style scoped>
.screen {
  width: 500px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgb(161, 162, 163);
  opacity: 0.3;
}


.input {
  width: 600px;
  
}

.inputStyle {
  width: 500px;
  height: 100px;
  border-radius: 20px;
  margin-right: 10px;
}
.left{
  width: 90vw;
  height: 100%;
  background-color: #7359e4;
}
.r{
  text-align: right;
}
.l{
  text-align: left;
}
.t{
  width: fit-content;
  height: fit-content;
  padding: 5px;
  font-size: 30px;
}
</style>