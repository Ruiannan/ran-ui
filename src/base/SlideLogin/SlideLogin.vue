<template>

  <div class="mainbox">

    <div class="container right-panel-active">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form action="#"
              class="form"
              id="form1">
          <h2 class="form__title">Sign Up</h2>
          <input type="text"
                 placeholder="User"
                 class="input" />
          <input type="email"
                 placeholder="Email"
                 class="input" />
          <input type="password"
                 placeholder="Password"
                 class="input" />
          <button class="btn">Sign Up</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form action="#"
              class="form"
              id="form2">
          <h2 class="form__title">Sign In</h2>
          <input type="email"
                 placeholder="Email"
                 class="input" />
          <input type="password"
                 placeholder="Password"
                 class="input" />
          <a href="#"
             class="link">Forgot your password?</a>
          <button class="btn">Sign In</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <slot name="signin"></slot>
            <!-- <button class="btn"
                    id="signIn">Sign In</button> -->
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn"
                    id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'slide-login',
  data () {
    return {
      showSpan: false,
      showSecond: false
    }
  },
  props: {
  },
  computed: {
    styles () {
      return {
        'font-size': this.size
      }
    },
  },
  mounted () {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());

  },
  methods: {
  }
}
</script>

<style scoped>
@import "./slideLogin.css";
</style>

<docs>
以背景背景图片为底的滑盖登录组件（使用方式待加入）

## 组件案例

登录 -- 背景滑盖:
```jsx
<slide-login>
  <button slot="signin" class="btn"
                    id="signIn">Sign In</button>
</slide-login>
```

</docs>
