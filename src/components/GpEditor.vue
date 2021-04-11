<template>
	<ckeditor
			class="gp-editor"
			v-if="editor"
			v-on="$listeners"
			:editor="editor"
			:value="value"
			:config="config"
			tag-name="textarea"/>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '../../build/ckeditor';

export default {
	name: 'GpEditor',
	components: { ckeditor: CKEditor.component },
	props: [ 'value', 'config' ],
	data: () => ({
		editor: ClassicEditor,
	}),
	watch: {
		config: function () {
			this.editor = null;
			setTimeout(() => this.editor = ClassicEditor);
		}
	}
};
</script>
<style scoped>
.gp-editor {
	width: 100%;
}
</style>
