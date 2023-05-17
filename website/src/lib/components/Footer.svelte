<script lang="ts">
	// Base Classes
	const cBase = 'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRow = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';

    import constants from "../utils/constants";
</script>

<div class="page-footer {cBase}">
	<div class="w-full max-w-7xl mx-auto p-7 py-16 md:py-24 space-y-10">
		<section class={cRow}>
			<p>
				<a class="anchor" href="https://github.com/skeletonlabs/skeleton/blob/master/LICENSE" target="_blank" rel="noreferrer">
					MIT License
				</a>
				<span class="opacity-10 mx-2">|</span>
				<a class="anchor" href={constants.SOCIALS.OWNER.GITHUB} target="_blank" rel="noreferrer">ThatGuyJamal </a>
			</p>
			<div class="flex space-x-4">
				<a class="btn variant-soft-primary hover:animate-pulse" href={constants.SOCIALS.GITHUB} target="_blank" rel="noreferrer">
					<i class="fa-brands fa-github" />
					<span class="hidden md:inline-block ml-2">Github</span>
				</a>
				<a class="btn variant-filled-secondary hover:animate-pulse" href={constants.SOCIALS.DISCORD} target="_blank" rel="noreferrer">
					<i class="fa-brands fa-discord" />
					<span class="hidden md:inline-block ml-2">Discord</span>
				</a>
				<a class="btn variant-soft-primary hover:animate-pulse" href={constants.SOCIALS.TWITTER} target="_blank" rel="noreferrer">
					<i class="fa-brands fa-twitter" />
					<span class="hidden md:inline-block ml-2">Twitter</span>
				</a>
				<a class="btn variant-filled-secondary hover:animate-pulse" href={constants.SOCIALS.YOUTUBE} target="_blank" rel="noreferrer">
					<i class="fa-brands fa-youtube" />
					<span class="hidden md:inline-block ml-2">YouTube</span>
				</a>
			</div>
		</section>
	</div>
</div>