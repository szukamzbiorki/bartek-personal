<template>
	<main></main>
</template>

<script setup>
	const { data: projects } = await useAsyncData('projects', () =>
		queryContent('/projects').findOne()
	)
	const { mobile } = useScreenSize()
	console.log(projects.value)

	function getEls(arr, startIndex, endIndex) {
		return arr.slice(startIndex, endIndex + 1)
	}
</script>

<style lang="postcss" scoped>
	main {
		height: 80vh;
		width: 100%;
		/* background-color: red; */
	}
</style>
