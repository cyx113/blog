<template>
  <div id="app">
    <hand></hand>

  </div>
</template>

<script>
import Hand from './components/HelloWorld.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
      Hand
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<style >
html,body,#app {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #f6f6f6;
}
code {
      display: inline-block;
          background-color: #fff5f5;
          border-radius: 3px;
          padding-left: 5px;
          padding-right: 5px;
          color: #ff502c;
          margin: 0px 3px;
          line-height: 1.1rem;
          font-size: .87rem;
}
  pre>code{
    width: 100%;
    border: 0px !important;
    background-color: #283646 !important;
    color: #FFF;
  }

</style>
