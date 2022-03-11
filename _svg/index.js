// https://codepen.io/johnYu243/pen/poNjNzz
// https://9527-uijavascript-demovuecode-syzaqfx8bny.ws-us34.gitpod.io/btn-3d.html
import Vue from 'vue'
import "./index.css"

const App = {
  template: `

    <div>
    <svg id="Capa_1" enable-background="new 0 0 512.004 512.004" height="512" viewBox="0 0 512.004 512.004" width="512" xmlns="http://www.w3.org/2000/svg">
  <path d="m175.669 463.803c-8.283 0-15-6.716-15-15 0-53.743-43.723-97.467-97.467-97.467-14.622 0-28.673 3.153-41.762 9.371-7.483 3.555-16.432.371-19.986-7.112-3.555-7.482-.37-16.431 7.113-19.985 17.143-8.143 35.525-12.273 54.635-12.273 70.286 0 127.467 57.182 127.467 127.467 0 8.283-6.714 14.999-15 14.999z" fill="#c5e1e6" />
  <path d="m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-210.801c-8.285 0-15 6.716-15 15s6.715 15 15 15h224.932c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z" fill="#008adf" />
  <path d="m442.768 321.476c-63.027 2.945-113.414 51.086-120.563 112.327h-66.204v30h80.335c8.285 0 15-6.716 15-15 0-52.162 40.777-94.928 92.832-97.36 8.275-.387 14.67-7.408 14.283-15.684-.387-8.275-7.402-14.684-15.683-14.283z" fill="#0065a3" />
  <path d="m448.787 415.604c-7.721 0-14.279-5.923-14.932-13.755l-28.796-345.572c-1.291-15.484-11.852-26.275-20.521-26.275-8.283 0-15-6.716-15-15s6.717-15 15-15c12.9 0 25.295 5.971 34.9 16.811 8.852 9.99 14.361 23.12 15.518 36.972l28.797 345.573c.688 8.256-5.447 15.506-13.703 16.194-.425.035-.847.052-1.263.052z" fill="#8db9c4" />
  <circle cx="63.203" cy="448.803" fill="#c5e1e6" r="48.2" />
  <path d="m63.203 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.306 0-33.199 14.893-33.199 33.199 0 18.307 14.894 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z" fill="#1d4659" />
  <circle cx="448.803" cy="448.803" fill="#8db9c4" r="48.2" />
  <g fill="#0e232c">
    <path d="m448.803 512.002c-34.848 0-63.199-28.351-63.199-63.199 0-34.849 28.352-63.199 63.199-63.199 34.85 0 63.201 28.35 63.201 63.199 0 34.848-28.352 63.199-63.201 63.199zm0-96.398c-18.307 0-33.199 14.893-33.199 33.199 0 18.307 14.893 33.199 33.199 33.199 18.307 0 33.201-14.893 33.201-33.199s-14.895-33.199-33.201-33.199z" />
    <path d="m352.402.002c-8.283 0-15 6.716-15 15s6.717 15 15 15h32.135v-30h-32.135z" />
  </g>
</svg>

  <button @click="animateBike"> Build! </button>

    </div>

  `,
  data() {
    return {
      animateBike: function () {
        const tl = new TimelineMax();
        tl
          // Ground
          .staggerFrom(
            [
              "#Capa_1 > g > path:nth-child(1)",
              "#Capa_1 > circle:nth-child(7)",
              "#Capa_1 > path:nth-child(6)",
              "#Capa_1 > circle:nth-child(5)"
            ],
            1,
            {
              scaleY: 0,
              scaleX: 0,
              transformOrigin: "center",
              ease: Bounce.easeOut,
              stagger: 0.2
            }
          );
      }
      
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
