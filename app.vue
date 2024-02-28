<template>
	<div :style="{ '--window-height': `${windowHeight}px` }">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const { height: windowHeight } = useWindowSize()

	const meta = {
		title: 'Info @ Bartek Pierściński',
		desc: 'Designer and developer based in Den Haag, Netherlands',
		image: '',
	}

	useHead({
		title: meta.title,
		ogTitle: meta.title,
		meta: [{ name: 'description', content: meta.desc }],
	})

	useSeoMeta({
		title: meta.title,
		ogTitle: meta.title,
		description: meta.desc,
	})
</script>

<style></style>
