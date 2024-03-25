<template>
    <div class="container">


        <div class="newNote">
            <el-form class="new">
                <div style="margin-bottom: 10px;" >
                    <h3>标题</h3>
                    <el-input
                            v-model="note.input"
                            style="width: 600px;margin-top:5px;"
                            :rows="2"
                            type="input"
                            placeholder="请输入标题"
                        />
                </div>
               <div>
                    <h4>内容</h4>
                    <el-input
                            v-model="note.textarea"
                            style="width: 600px;margin-top:5px;"
                            :rows="5"
                            type="textarea"
                            placeholder="请输入内容"
                        />
               </div>
               <div style="width: fit-content;position: relative;right: -470px;">
                    <el-button class="btn1" @click="cancel" type="primary">取消</el-button>
                    <el-button class="btn2" @click="save" type="primary">保存</el-button>
               </div>              
            </el-form>
            <AudioToWord v-on:word="voice" class="microphone" />

        </div>
       
        
    </div>
  </template>

<script lang="ts">
  import {ref} from 'vue';
  import AudioToWord from "@/views/layout-note/speech.vue";
  export default{
    name:'create'
  }
     
</script>
  
  <script lang="ts" setup>  
    const note = ref({
      input:'',
      textarea:''
    })
   

    function save() {
      console.log(note.value.input)
    
    }

    function voice(word){
        note.value.textarea += word;
        console.log(word)
    }
    function cancel(){
        note.value = {
          input:'',
          textarea:''
        }
    }
      

  </script>
  
  
  <style scoped>
  .container{
    display: flex;
  }
  .noteList{
    width: 310px;
    height: 100vh;
    margin: 5px 10px;
    border: 1px solid #edc7c7;
    border-radius: 20px;
  }
  .newNote{
    width: 1100px;
    height: 100vh;
    margin: 5px ;
    border: 1px solid #edc7c7;
    border-radius: 20px;
  }
  .new{
    margin: 20px;

  }
  .smallNode{
    text-align: left;
    border: 1px solid #edc7c7;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    h5{
      overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    }
  }
  .microphone{
    position: relative;
    top: -80px;
    right:-590px;
    
  }
  .btn1{
    position: relative;
    left: 0;
    top: 10px;
  }
  .btn2{
    position: relative;
    left: 0;
    top: 10px;
  }

  </style>
  