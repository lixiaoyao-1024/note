<template>
  <div id="setting">
    <div class="navbar">
      <h3 class="title">基本功能</h3>
      <ul class="nav-list">
        <li class="button">
          <router-link class="nav" :to="{name:'create'}">新建笔记</router-link>
        </li>
        <li class="button">
          <router-link class="nav" :to="{name:'allnote'}">所有笔记</router-link>
        </li>
        <li class="button">
          <router-link class="nav" :to="{name:'collection'}">收藏夹</router-link>
        </li>
        
        <div class="current-nav default-transition" :style="{top:top}">

        </div>
      </ul>
    </div> 
    <router-view ></router-view>
  </div>   
</template>

<script lang="ts">
export default {
    name:'LayoutNote'
}
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue-demi';
const route = useRoute()


// 当前选中导航索引
const currentNav = computed(()=>{
  if(route.name == 'collection'){return 2;}
  else if(route.name == 'allnote'){return 1;}
  else {return 0;}
})
// 当前导航样式高度
const top = computed(()=>{
  return currentNav.value * 41 + 'px'
})


</script>

<style scoped>
#setting{
  height: 100%;
  display: flex;
  background-color: var(--main-bg);
}
.navbar{
  width: 220px;
  height: 100%;
  min-height: 917px;
  padding: 20px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--setting-nav-bg);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
}
.navbar>.title{
  margin-bottom: 50px;
  color:var(--setting-title)
}
.nav-list{
  position: relative;
  width: 100%;
  /* display: flex;
  flex-flow: column;
  align-items: center; */
}
.nav-list>li{
  text-align: center;
  /* width: 100% */
  color: var(--setting-nav-word);
}
.nav-list>li>.nav{
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: block;
  color: var(--setting-nav-word);
}
/* 退出登录按钮 */
.nav-list>li.logout{
  padding: 10px 0;
}
.current-nav{
  position: absolute;
  left: 0;
  width: 100%;
  height: 41px;
  border: 1px solid var(--setting-current-border);
}

.main{
  flex: 1;
  display: flex;
  flex-flow: column;
  padding: 40px;
}
.main>.title{
  margin-bottom: 10px;
  color: var(--setting-main-title);
}
.main>.router-box{
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: var(--main-child-bg);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}
/* 修改elementui默认样式 */
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>