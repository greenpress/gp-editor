<template>
	<div v-if="editor">
		<ckeditor
				class="gp-editor"
				:editor="editor"
				v-model="value"
				:config="config"
				tag-name="textarea"/>
	</div>
</template>

<script>
import { computed, nextTick, ref, watch } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '../../build/ckeditor';

export default {
	name: 'GpEditor',
	components: { ckeditor: CKEditor.component },
	props: [ 'modelValue', 'config' ],
	emits: ['input', 'update:modelValue'],
	setup(props, { emit }) {
		const editor = ref(ClassicEditor);

		watch(() => props.config, async () => {
			editor.value = false;
			await nextTick();
			editor.value = ClassicEditor;
		})
		return {
			editor,
			value: computed({
				get: () => props.modelValue,
				set: (value) => {
					emit('input', value)
					emit('update:modelValue', value)
				}
			})
		}
	}
};
</script>
<style scoped>
.gp-editor {
	width: 100%;
}
</style>
