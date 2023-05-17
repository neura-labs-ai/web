<script lang="ts">
	import {
		AppShell,
		AppBar,
		drawerStore,
		Avatar,
		Drawer,
		LightSwitch
	} from '@skeletonlabs/skeleton';

	import Navigation from '$lib/components/SideNavigation.svelte';
	import { page } from "$app/stores"
	import { goto } from '$app/navigation';

	function drawerOpen(): void {
		drawerStore.open();
	}

	function handleHomeButton(): void {
		goto('/');
	}
</script>

<Drawer>
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10">
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
				<Avatar src={$page.data.session?.user?.image ?? ""} width="w-10" background="bg-primary-500" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container p-10 mx-auto">
		<slot />
	</div>
	<!-- ---- / ---- -->
</AppShell>
