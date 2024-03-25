<template>
    <div @click="audioCHangeWord" style="cursor: pointer;width: fit-content;">

      <img v-if="isListening" src="@/assets/micr.gif" style="width: 30px;height: 30px;">

      <svg class="icon" v-else style="width: 25px;height: 25px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3340"><path d="M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z" p-id="3341" data-spm-anchor-id="a313x.search_index.i1.i1.47d13a81dNOCnq"></path></svg>
      <!-- <svg class="icon"  style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3340"><path d="M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z" p-id="3341" data-spm-anchor-id="a313x.search_index.i1.i1.47d13a81dNOCnq"></path></svg> -->
                 <!-- <svg class="icon"   v-else style="width: 25px;height: 25px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4127"><path d="M556.4 631.7L318.3 291.6v151.8c0 106.6 87.2 193.7 193.7 193.7 15.3 0 30.1-2 44.4-5.4zM512 725.9c-155.8 0-282.5-126.7-282.5-282.5 0-22.3-18.1-40.4-40.4-40.4s-40.4 18.1-40.4 40.4c0 183.9 137.3 336.1 314.8 359.9v108.3c0 26.6 21.8 48.4 48.4 48.4 26.6 0 48.4-21.8 48.4-48.4V803.3c34.1-4.6 66.6-13.9 97-27.3l-47.6-67.9c-30.4 11.3-63.3 17.8-97.7 17.8zM760.9 707.3c70.3-66.2 114.4-160 114.4-264 0-22.3-18.1-40.4-40.4-40.4s-40.4 18.1-40.4 40.4c0 76.6-30.8 146.1-80.5 197l-52.5-74.9c27.4-33.4 44.2-75.8 44.2-122.1V257.7C705.7 151.2 618.5 64 512 64c-60.8 0-115.1 28.5-150.7 72.8l-35.7-51c-10.2-14.5-30.4-18.1-45-7.9-14.5 10.2-18.1 30.4-7.9 45l494.7 706.6c10.2 14.5 30.4 18.1 45 7.9 14.5-10.2 18.1-30.4 7.9-45l-59.4-85.1z" p-id="4128"></path></svg> -->

      <!-- <el-button type="primary" @click="audioCHangeWord"><span v-if="isListening">语音识别中...</span><span v-else>语音识别</span></el-button> -->
    </div>
  </template>


<script>
export default {
  name: "AudioToWord",
  data() {
    return {
      word: "",
      isListening: false, // 判断是否在语音监听中
    }
  },
  methods: {
    audioCHangeWord() { 
      var that = this;
      that.word = "";
      // 创建SpeechRecognition对象
      // eslint-disable-next-line no-undef
      var recognition = new webkitSpeechRecognition();
      if (!recognition) { 
        // eslint-disable-next-line no-undef
        recognition = new SpeechRecognition();
      }
      // 设置语言
      recognition.lang = 'zh-CN';
      // 开始语音识别
      recognition.start();
      that.isListening = true;
      // 监听识别结果
      recognition.onresult = function (event) {
        var result = event.results[0][0].transcript;
        that.word = result;
        console.log(that.word);
        that.$emit("word",that.word);
      };

      // 监听错误事件
      recognition.onerror = function (event) {
        that.isListening = false;
        that.$message("监听语音失败:"+event.error);
        console.error(event.error);
      };
      // 监听结束事件（包括识别成功、识别错误和用户停止）
      recognition.onend = function () {
        that.isListening = false;
        console.log("语音识别停止");
      };

    }
  }
}
</script>



  