import './styles/homepage.scss'
import { createApp } from 'vue';


createApp({
  compilerOptions: {
    delimiters: ['${', '}$']
  },
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    setInterval(() => this.count++, 1000)
  }
}).mount('#app');

