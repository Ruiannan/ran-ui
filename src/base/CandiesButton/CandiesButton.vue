<template>
  <button :class="candiesClass"
          :style="styles"
          @click="handleClick">
    <span>
      <!-- @slot 使用此槽放置按钮内容 -->
      <slot></slot>
    </span>
  </button>
</template>

<script>
import sizeMixin from '../sizeMixin'
export default {
  name: 'candies-button',
  mixins: [sizeMixin],
  props: {
    /**
     * 设置按钮颜色
     */
    color: {
      type: String,
      default: 'black'
    },
    /** 设置按钮的背景颜色
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    },
    /** @deprecated 使用颜色相反 */
    oldColor: String,
    /**
     * 设置糖果按钮样式
     */
    candiesTpye: {
      type: String,
      default: 'custom-btn'
    }
  },
  computed: {
    styles () {
      return {
        'font-size': this.size,
        margin: this.margin
      }
    },
    candiesClass () {
      switch (this.candiesTpye) {
        case 'candies-1':
          return {
            'custom-btn': true,
            'btn-1': true,
            'btn-1:hover': true
          };
        case 'candies-2':
          return {
            'custom-btn': true,
            'btn-2': true,
            'btn-2:before': true,
            'btn-2:hover': true
          };
        case 'candies-3':
          return {
            'custom-btn': true,
            'btn-3 span': true,
            'btn-3:before,btn-3:after': true,
            'btn-3:before': true,
            'btn-3:after': true,
            'btn-3:hover': true,
            'btn-3:hover:before': true,
            'btn-3:hover:after': true,
            'btn-3 span:hover': true,
            'btn-3 span:before,btn-3 span:after': true,
            'btn-3 span:before': true,
            'btn-3 span:after': true,
            'btn-3 span:hover:before': true,
            'btn-3 span:hover:after': true
          };
        case 'candies-4':
          return {
            'custom-btn': true
          };
        case 'candies-5':
          return {
            'custom-btn': true
          };
        case 'candies-6':
          return {
            'custom-btn': true
          };

        default:
          return {
            'custom-btn': true
          };
      }

    }
  },
  methods: {
    handleClick (e) {
      /** 当点击按钮时触发
       * @event click
       * @type {Event}
       */
      this.$emit('click', e)

      /** 事件为 Alligator 的例子
       * @event gator
       * @type {Event}
       */
      this.$emit('gator', e)
    }
  }
}
</script>

 <style scoped>
@import "./candiesButton.css";
</style>

<docs>
花里胡哨的糖果按钮 

## 组件案例

糖果按钮-1:

```jsx
<candies-button candiesTpye="candies-1">Push Me</candies-button>
```

糖果按钮-2:

```jsx
<candies-button candiesTpye="candies-2">Push Me</candies-button>
```

糖果按钮-3:

```jsx
<candies-button candiesTpye="candies-3">Push Me</candies-button>
```
</docs>
