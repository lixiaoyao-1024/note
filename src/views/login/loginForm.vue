<template>
  <ElForm
    class="login-form"
    ref="loginRef"
    :model="loginParam"
    :rules="loginRules"
  >
    <h1 class="login-title">登录</h1>
    <ElFormItem prop="phone">
      <ElInput
        placeholder="请输入账号"
        :prefix-icon="User"
        v-model="loginParam.phone"
        size="large"
      ></ElInput>
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        placeholder="请输入密码"
        show-password
        :prefix-icon="Lock"
        v-model="loginParam.password"
        size="large"
      ></ElInput>
    </ElFormItem>
    <!-- <ElFormItem prop="yzm">
      <ElInput
        placeholder="请输入验证码"
        style="width: 65%"
        show-password
        v-model="loginParam.code"
        size="large"
      ></ElInput>
      <img
        id="img"
        src="http://localhost:8080/code"
        alt="验证码"
        onclick="src='http://localhost:8080/code?t='+new Date().getTime()'"
      />
    </ElFormItem> -->
    <ElFormItem>
      <ElButton
        type="primary"
        class="login-btn"
        size="large"
        @click="submit()"
        >登录</ElButton
      >
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">

import { User, Lock } from "@element-plus/icons-vue";
// import { LoginReq } from "@/interface/user";
import { reactive, ref } from "vue";
import {  FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import {UserService} from '@/api/api.ts';
import { ElMessage } from 'element-plus';

// const loginParam: LoginReq = reactive({
//   phone: "",
//   password: "",
//   code: "",
// });
const loginParam = reactive({
  phone: "",
  password: ""
});
const router = useRouter()
const loginRef = ref<FormInstance>();
const loginRules: FormRules = reactive({
  phone: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});
// const submit = (formEl: FormInstance | undefined) => {
//   if (!formEl) {
//     return false;
//   }
//   formEl.validate(async (validate: boolean) => {
//     if (validate) {
//      // var that = this;
//       axios.post("http://localhost:8080/login",{
//         phone: loginParam.phone,
//         password: loginParam.password,
//         code: loginParam.code,
//       }).then(function(res){
//         console.log(res.data);
//         router.push({name:'home'});
//       })
//       //console.log("开始做登录的逻辑");
//     } else {
//       return false;
//     }
//   });
// };
const submit =  ()=>{
  const res:any =  UserService.login(loginParam)
  res.then(r=>{
    console.log(r.data)
    ElMessage.success("登陆成功,正在进入主页面")
    setTimeout(()=>{
      router.push({name:'home'});
    },1500)
  })
  
 
}
</script>

<style scoped>
.login-form {
  grid-column: 1;
  grid-row: 1;
  opacity: 1;
  transition: 1s ease-in-out;
  transition-delay: 0.5s;
  /* 上下 | 左右 */
  padding: 1% 25%;
  z-index: 1;
}
.login-form.sign-up-model {
  opacity: 0;
  transition: 1s ease-in-out;
  z-index: 0;
}
.login-title {
  text-align: center;
  color: #444;
}
.login-btn {
  width: 100%;
  font-size: 18px;
}
#img {
  margin-left: 12px;
  border: 1px solid #444;
  height: 30px;
}
</style>
