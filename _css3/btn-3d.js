// https://codepen.io/mudontire/pen/aeJQqB
// https://9527-uijavascript-demovuecode-syzaqfx8bny.ws-us34.gitpod.io/btn-3d.html
import Vue from 'vue'
import "./btn-3d.less"


const App = {
  template: `

    <button class="button-3d-1">3D Button 1</button>
  `,
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    plusOne: function () {
      return this.count + 1
    },
  },
  methods: {
    increment() {
      this.count++
    },
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
