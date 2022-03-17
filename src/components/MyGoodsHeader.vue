<!--
 * @Author: your name
 * @Date: 2022-03-17 16:56:31
 * @LastEditTime: 2022-03-17 17:26:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\components\MyGoodsHeader.vue
-->
<template>
  <div class="my-header" :style="{ backgroundColor: bacground, color }">
    {{ title }}
  </div>
</template>

<script>
export default {
  // 定义props对象接收父组件传递的自定义头部信息
  props: {
    // 接收背景颜色
    bacground: String,
    // 接收字体颜色
    color: {
      type: String,
      default: "#fff",
    },
    // 接收标题信息
    title: {
      // 标题校验必须填写
      type: String,
      required: true,
    },
  },
  // 数据对象
  data() {
    return {};
  },

  //函数
  methods: {},

  //计算属性
  computed: {},

  //侦听器
  watch: {},

  //组件注册
  components: {},
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>