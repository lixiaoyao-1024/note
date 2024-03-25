import { defineStore } from "pinia";

export const useBackgroundStore =  defineStore('background',{
    state:()=>({
        backgroundImg:[
            {
                url:require('@/assets/login-bg/sky.jpg'),
                active:true,
                name:'背景'
            },
            
        ]
    }),
    actions:{
        changeActive(index:number){
            this.backgroundImg.forEach(item => item.active = false);
            this.backgroundImg[index].active = true;
        }
    },
    getters:{
        getActiveImg(state){
            return state.backgroundImg.filter(item => item.active == true)[0]
        }
    },
    persist: {
        storage: localStorage,
        paths:['backgroundImg']
    }
})