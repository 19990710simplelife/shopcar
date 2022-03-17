<!--
 * @Author: your name
 * @Date: 2022-03-17 16:57:22
 * @LastEditTime: 2022-03-17 18:48:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \shopcar\src\components\MyGoodsCount.vue
-->
<template>
  <div class="my-counter">
    <button
      type="button"
      :disabled="this.countObj.goods_count === 1"
      @click="subCount"
      class="btn btn-light"
    >
      -
    </button>
    <input
      type="number"
      v-model.number="countObj.goods_count"
      class="form-control inp"
    />
    <button type="button" @click="addCount" class="btn btn-light">+</button>
  </div>
</template>

<script>
export default {
  // 定义props接收父组件传递过来的对象
  props: { countObj: Object },
  // 数据对象
  data() {
    return {};
  },

  //函数
  methods: {
    // 数量减一
    subCount() {
      this.countObj.goods_count--;
    },

    addCount() {
      this.countObj.goods_count++;
    },
  },

  //计算属性
  computed: {},

  //侦听器
  watch: {
    // 监听countObj中countObj.goods_count数量的变化当数量小于0的时候强制改变为1
    countObj: {
      immediate: true,
      deep: true, //因为是对象，所以需要深度监听
      handler() {
        // 判断当前的数量是否小于0
        if (this.countObj.goods_count <= 0) {
          // 强制将数量改为1
          this.countObj.goods_count = 1;
        }
      },
    },
  },

  //组件注册
  components: {},
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>