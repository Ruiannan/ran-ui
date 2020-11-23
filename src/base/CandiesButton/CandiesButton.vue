<template>
  <button :class="candiesClass"
          :style="styles"
          @click="handleClick">
    <!-- @slot 滚动后 使用此槽放置按钮内容 用于糖果按钮-12 -->
    <slot name="second"
          v-if="showSecond">
    </slot>
    <!-- @slot 滚动前 使用此槽放置按钮内容 用于糖果按钮-12 -->
    <slot v-if="showSpan && showSecond"
          name="first">
    </slot>
    <span v-if="showSpan && !showSecond">
      <!-- @slot 使用此槽放置按钮内容 -->
      <slot></slot>
    </span>
    <!-- @slot 使用此槽放置按钮内容 -->
    <slot v-else></slot>
  </button>
</template>

<script>
import sizeMixin from '../sizeMixin'
export default {
  name: 'candies-button',
  mixins: [sizeMixin],
  data () {
    return {
      showSpan: false,
      showSecond: false
    }
  },
  props: {
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
        'font-size': this.size
      }
    },
    candiesClass () {
      let that = this
      switch (this.candiesTpye) {
        case 'candies-1':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-1': true
          };
        case 'candies-2':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-2': true
          };
        case 'candies-3':
          that.showSpan = true
          return {
            'custom-btn': true,
            'btn-3 span': true
          };
        case 'candies-4':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-4': true,
            'btn-4:hover': true
          };
        case 'candies-5':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-5': true
          };
        case 'candies-6':
          that.showSpan = true
          return {
            'custom-btn': true,
            'btn-6': true
          };
        case 'candies-7':
          that.showSpan = true
          return {
            'custom-btn': true,
            'btn-7': true
          };
        case 'candies-8':
          that.showSpan = true
          return {
            'custom-btn': true,
            'btn-8': true
          };
        case 'candies-9':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-9': true
          };
        case 'candies-10':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-10': true
          };
        case 'candies-11':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-11': true
          };
        case 'candies-12':
          that.showSecond = true
          that.showSpan = true
          return {
            'custom-btn': true,
            'btn-12': true
          };
        case 'candies-13':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-13': true
          };
        case 'candies-14':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-14': true
          };
        case 'candies-15':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-15': true
          };
        case 'candies-16':
          that.showSpan = false
          return {
            'custom-btn': true,
            'btn-16': true
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
      /** 当点击按钮时触发
       * @event click
       * @type {Event}
       */
      this.$emit('wolf', '你是大坏蛋！the big bad wolf！')
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

糖果按钮:

```jsx
<candies-button>Push Me</candies-button>
```

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

糖果按钮-4:

```jsx
<candies-button candiesTpye="candies-4">Push Me</candies-button>
```

糖果按钮-5:

```jsx
<candies-button candiesTpye="candies-5">Push Me</candies-button>
```

糖果按钮-6:

```jsx
<candies-button candiesTpye="candies-6">Push Me</candies-button>
```
糖果按钮-7:

```jsx
<candies-button candiesTpye="candies-7">Push Me</candies-button>
```

糖果按钮-8:

```jsx
<candies-button candiesTpye="candies-8">Push Me</candies-button>
```

糖果按钮-9:

```jsx
<candies-button candiesTpye="candies-9">Push Me</candies-button>
```

糖果按钮-10:

```jsx
<candies-button candiesTpye="candies-10">Push Me</candies-button>
```

糖果按钮-11:

```jsx
<candies-button candiesTpye="candies-11">Push Me</candies-button>
```

糖果按钮-12:

```jsx
<candies-button candiesTpye="candies-12">
  <span slot="first">first</span>
  <span slot="second">second</span>
</candies-button>
```

糖果按钮-13:

```jsx
<candies-button candiesTpye="candies-13">Push Me</candies-button>
```

糖果按钮-14:

```jsx
<candies-button candiesTpye="candies-14">Push Me</candies-button>
```

糖果按钮-15:

```jsx
<candies-button candiesTpye="candies-15">Push Me</candies-button>
```

糖果按钮-16:

```jsx
<candies-button candiesTpye="candies-16">Push Me</candies-button>
```
</docs>
