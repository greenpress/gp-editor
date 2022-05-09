<template>
  <component :is="tagName"/>
</template>

<script>
export default {
  name: "Ckeditor",
  model: { prop: "modelValue", event: "update:modelValue" },
  props: {
    editor: { type: Function, default: null },
    modelValue: { type: String, default: "" },
    config: { type: Object, default: () => ({}) },
    tagName: { type: String, default: "div" },
    disabled: { type: Boolean, default: !1 }
  },
  data: () => ({ _lastEditorData: { type: String, default: "" } }),
  mounted() {
    const t = Object.assign({}, this.config);
    this.modelValue && (t.initialData = this.modelValue), this.editor.create(this.$el, t).then(t => {
      this._instance = t, t.isReadOnly = this.disabled, this._setUpEditorEvents(), this.$emit("ready", t)
    }).catch(t => {
      console.error(t)
    })
  },
  beforeUnmount() {
    this._instance && (this._instance.destroy(), this._instance = null), this.$emit("destroy", this._instance)
  },
  watch: {
    modelValue(t, e) {
      t !== e && t !== this._lastEditorData && this._instance.setData(t)
    }, disabled(t) {
      this._instance.isReadOnly = t
    }
  },
  methods: {
    _setUpEditorEvents() {
      const t = this._instance;
      const e = () => {
        const n = this._lastEditorData = t.getData();
        this.$emit("update:modelValue", n);
        this.$emit("input", n)
      }
      t.model.document.on("change:data", e);
      t.editing.view.document.on("focus", e => {
        this.$emit("focus", e, t)
      });
      t.editing.view.document.on("blur", e => {
        this.$emit("blur", e, t)
      })
    }
  }
}
</script>

<style scoped>

</style>
