<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// import "../theme.postcss"
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// SEO Meta tags
	const meta = {
		title: 'NeuraLabs AI',
		description: "Machine Learning API's for developers by developers",
		long_description:
			"A collection of API's and tools for developers to build amazing applications using Machine Learning, Natural Language Processing, and the love for technology.",
		keywords: 'Machine Learning, AI, API, Developer API, Programming',
		author: 'ThatGuyJamal'
	};
</script>

<svelte:head>
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	<meta name="author" content={meta.author} />
</svelte:head>

<slot />
