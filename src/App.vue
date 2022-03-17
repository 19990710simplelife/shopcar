<!--
 * @Author: your name
 * @Date: 2022-03-17 16:51:17
 * @LastEditTime: 2022-03-17 19:22:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\App.vue
-->
<template>
  <div>
    <MyGoodsHeader title="自定义购物车"></MyGoodsHeader>
    <div class="goodslist">
      <!-- 将数据传递给子组件 -->
      <MyGoodsList
        v-for="product in goodsList"
        :key="product.id"
        :productObj="product"
      ></MyGoodsList>
    </div>
    <MyGoodsFooter
      @allSelect="changeAll"
      :goodsList="goodsList"
    ></MyGoodsFooter>
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
    return {
      goodsList: [], //商品的数据
    };
  },

  //函数
  methods: {
    // 接收子组件传递的值，并将其赋值给小选框
    changeAll(bool) {
      this.goodsList.forEach((obj) => (obj.goods_state = bool));
    },
  },

  //created()生命周期执行的时候获取数据
  created() {
    // 发起axios请求
    this.$axios({
      url: "/api/cart",
      method: "GET",
    })
      .then((result) => {
        this.goodsList = result.data.list;
        console.log(result.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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