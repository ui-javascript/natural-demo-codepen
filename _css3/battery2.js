// https://codepen.io/Chokcoco/pen/vYExwvm
import Vue from 'vue'
import "./battery2.css"

const App = {
  template: `

<div class="g-container">
  <div class="g-number">98.7%</div>
  <div class="g-contrast">
      <div class="g-circle"></div>
      <ul class="g-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
</div>

  `,
  data() {
    return {
     
      
    }
  },
  computed: {
   
  },
  methods: {
   
  },
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
