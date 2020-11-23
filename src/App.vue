<template>
  <div id="app">

    <!-- 滑盖登录页 -->
    <slide-login>
      <!-- 糖果按钮 -->
      <candies-button slot="signin"
                      class="btn"
                      id="signIn"
                      candiesTpye="candies-1">Sign In</candies-button>
    </slide-login>
  </div>
</template>
 
<script>

export default {
  data () {
    return {}
  },
  methods: {
  }
}
</script>