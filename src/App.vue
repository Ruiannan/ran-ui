<template>
  <div id="app">
    <candies-button candiesTpye="candies-1"
                    @wolf="test">你是谁？</candies-button>
  </div>
</template>
 
<script>

export default {
  data () {
    return {}
  },
  methods: {
    test (e) {
      alert(e)
    }
  }
}
</script>