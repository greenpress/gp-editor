<template>
	<div id="app">
		<GpEditor v-model="content" :config="conf"/>

		<h2>The HTML result:</h2>
		<textarea class="preview" :value="content"/>

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
		content: 'hello world',
		conf: {},
	}),
	created() {
		setTimeout(() => {
			this.conf = { language: 'he' };
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
	width: 100%;
}

.preview {
	box-sizing: border-box;
	padding: 10px;
	width: 100%;
	min-height: 300px;
	border: 1px solid #ddd;
	text-align: left;
	word-break: break-all;
}
</style>
