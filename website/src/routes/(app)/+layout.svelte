<script lang="ts">
	import {
		AppShell,
		AppBar,
		drawerStore,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	function drawerOpen(): void {
		drawerStore.open();
	}

	// todo - load user from github auth information
	let isAuth = false;

	function handleNavButton(): void {
		if (isAuth) {
			goto('/dashboard');
		} else {
			goto('/login');
		}
	}

	function handleHomeButton(): void {
		goto('/');
	}	
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<button on:click={handleHomeButton}>
					<strong class="text-xl uppercase">NeuraLabs AI</strong>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				{#if isAuth}
					<button class="btn variant-filled-primary" on:click={handleNavButton}>Login</button>
				{:else}
					<button class="btn variant-filled-primary" on:click={handleNavButton}>Login</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
		<slot />
	<!-- ---- / ---- -->

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
