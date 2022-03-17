<!--
 * @Author: your name
 * @Date: 2022-03-17 16:57:39
 * @LastEditTime: 2022-03-17 19:29:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\components\MyGoodsFooter.vue
-->
<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        v-model="isALL"
        id="footerCheck"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ totalCount }})
    </button>
  </div>
</template>

<script>
export default {
  //定义props接收父组件传递的数组对象
  props: {
    goodsList: Array,
  },
  // 数据对象
  data() {
    return {};
  },

  //函数
  methods: {},

  //计算属性
  computed: {
    // 通过计算属性判断全选框是否选中
    isALL: {
      set(val) {
        // 将全选状态的值传递给夫组件，在父组件中自定义事件
        this.$emit("allSelect", val);
      },
      get() {
        return this.goodsList.every((obj) => obj.goods_state === true);
      },
    },
    //选中的总件数
    totalCount() {
      return this.goodsList.reduce((sum, obj) => {
        if (obj.goods_state === true) {
          sum += obj.goods_count;
        }
        return sum;
      }, 0);
    },

    //计算总价
    totalPrice() {
      return this.goodsList.reduce((sum, obj) => {
        if (obj.goods_state === true) {
          sum += obj.goods_count * obj.goods_price;
        }
        return sum;
      }, 0);
    },
  },

  //侦听器
  watch: {},

  //组件注册
  components: {},
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>