<template>
    <ckeditor
            v-if="editor"
            v-bind="$attrs"
            v-on="$listeners"
            :editor="editor"
            tag-name="textarea" />
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '../../build/ckeditor';

  export default {
    name: 'GpEditor',
    components: { ckeditor: CKEditor.component },
    data: () =>  ({
      editor: ClassicEditor,
    }),
  };
</script>

