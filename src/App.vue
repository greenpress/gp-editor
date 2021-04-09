<template>
    <div id="app">
        <GpEditor :value="'hello world'" :config="conf" />
    </div>
</template>

<script>
  import GpEditor from './components/GpEditor.vue'

  export default {
    name: 'App',
    components: {
      GpEditor
    },
    data: () => ({
      conf: {},
    }),
    created() {
      setTimeout( () => {
        this.conf = {language: 'he'};
      }, 3000);
    },
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
