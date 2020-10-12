<template>
  <div id="app">
    <GpEditor />
  </div>
</template>

<script>
import GpEditor from './components/GpEditor.vue'

export default {
  name: 'App',
  components: {
    GpEditor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
