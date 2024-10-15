<template>
	<header>
		<div class="title">
			<div class="label">Bartek Pierściński (2001, Kraków)</div>
			<div class="content">Designer and developer based in Den Haag, The Netherlands</div>
			<!-- <div class="rest">
				2020-2024 BA Graphic Design, Royal Academy of Art, Den Haag
			</div> -->
		</div>
		<div class="websites">
			<div class="label">Selected Websites</div>
			<div class="content">
				<a href="https://andreinitu.info">andreinitu.info</a>
				<a href="https://turnus.fun">turnus.fun</a>
				<!-- <a href="https://roots.kabk.nl/a">roots.kabk.nl</a> -->
				<a href="https://julesjanssen.biz">julesjanssen.biz</a>
				<a href="https://0000.garden">0000.garden</a>
				<a href="https://kabk.github.io/go-theses-24/">kabk.github.io [2024 dg theses]</a>
			</div>
		</div>
		<div class="contact">
			<div class="label">Contact</div>
			<div class="content">
				<a href="mailto:contact@bartekp.info">contact@bartekp.info</a>
				<a href="https://instagram.com/bartekpierscinski">(at)bartekpierscinski</a>
			</div>
		</div>
		<div class="bat">
			<div class="label">Battery</div>
			<div class="content">
				<div class="rest">
					{{ Math.floor(level * 100) + '%' }}
				</div>
				<div class="rest red">
					{{ level < 0.2 && !charging ? 'Charge your device!' : '' }}
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	const { mobile } = useScreenSize()

	const { charging, level } = useBattery()

	const props = defineProps({
		medium: Object,
	})
</script>

<style lang="postcss" scoped>
	header {
		padding: var(--space-m);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--space-m);
		width: 100%;
		background-color: black;
		@media screen and (max-width: 600px) {
			grid-template-columns: repeat(4, 1fr);
		}

		& > div {
			grid-column: span 2;

			&:hover {
				& > .label,
				.content {
					outline: 1px dashed white;
				}
			}
			& > .label {
				margin-bottom: 0.5rem;
				display: inline-block;
			}
			& > .content {
				display: block;
				width: max-content;
				& > a {
					text-decoration: underline;
					display: block;
				}
			}
		}

		& > .title {
			grid-column: span 6;
		}
		& > .bat {
			@media screen and (max-width: 600px) {
				display: none;
			}
		}
		& > .websites {
		}
	}

	.red {
		color: white;
	}

	*:not(a) {
		cursor: default;
	}
</style>
