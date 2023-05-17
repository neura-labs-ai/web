<script lang="ts">
	import { goto } from "$app/navigation";

	function handleTest(): void {
		goto("/dashboard")
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<button class="btn variant-filled-primary" on:click={handleTest}>Click me</button>
	</div>
</div>

<style lang="postcss">
</style>
