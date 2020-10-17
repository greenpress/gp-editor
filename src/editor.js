import GpEditor from './components/GpEditor.vue';

const EditorPlugin = {
  install(Vue) {
    Vue.component('gp-editor', GpEditor);
  }
};

export default EditorPlugin;

export { GpEditor };
