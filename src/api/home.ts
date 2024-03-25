import request from '@/api/request'

// 获取天气信息
// 使用的天气接口及参数 https://www.tianqiapi.com/index/doc?version=v61
//`https://v0.yiketianqi.com/free/day?appid=18926344&appsecret=UNV2vAUD&unescape=1&cityid=${cityid}'
export const reqGetWeather = (cityid:number)=> request({url:`https://restapi.amap.com/v3/weather/weatherInfo?key=6c8478b122548b56a4b7595b1ec4f2fb&city=${cityid}`,method:'get'})

// 获取github提交信息
 export const reqGithubCommit = (repository:string)=> request({url:`https://api.github.com/repos/${repository}/commits`,method:'get'});

// 获取gitee提交信息
export const reqGiteeCommit = (repository:string)=> request({url:`https://gitee.com/api/v5/repos/${repository}/commits`,method:'get'});
