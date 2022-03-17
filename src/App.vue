<!--
 * @Author: your name
 * @Date: 2022-03-17 16:51:17
 * @LastEditTime: 2022-03-17 17:27:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\App.vue
-->
<template>
  <div>
    <MyGoodsHeader title="自定义购物车"></MyGoodsHeader>
    <div class="goodslist"><MyGoodsList></MyGoodsList></div>
    <MyGoodsFooter></MyGoodsFooter>
  </div>
</template>

<script>
// 导入组件对象
import MyGoodsHeader from "@/components/MyGoodsHeader";
import MyGoodsList from "@/components/MyGoodsList";
import MyGoodsFooter from "@/components/MyGoodsFooter";
export default {
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
  components: {
    MyGoodsHeader,
    MyGoodsList,
    MyGoodsFooter,
  },
};
</script>

<style lang="less" scoped>
.goodslist {
  margin-top: 50px;
}
</style>