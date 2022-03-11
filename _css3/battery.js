// https://codepen.io/Chokcoco/pen/bGNqyra
import Vue from 'vue'
import "./battery.css"

const App = {
  template: `

<div class="container">
  <div class="battery"></div>
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
