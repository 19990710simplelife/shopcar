<!--
 * @Author: your name
 * @Date: 2022-03-17 16:56:47
 * @LastEditTime: 2022-03-17 17:17:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\components\MyGoodsList.vue
-->
<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="input" />
        <label class="custom-control-label" for="input">
          <img
            src="http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">商品名字</div>
      <div class="bottom">
        <span class="price">¥ 100</span>
        <span> <MyGoodsCount></MyGoodsCount> </span>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import MyGoodsCount from "@/components/MyGoodsCount";
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
    MyGoodsCount,
  },
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
