<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { LayoutDashboard, User, Receipt, HelpCircle, Book } from 'lucide-svelte';

	function drawerClose(): void {
		drawerStore.close();
	}   
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/dashboard" on:click={drawerClose}><LayoutDashboard /> <span>Dashboard</span></a></li>
		<li><a href="/dashboard/account" on:click={drawerClose}><User /> <span>Account</span></a></li>
		<li><a href="/dashboard/billing" on:click={drawerClose}><Receipt /> <span>Billing</span></a></li>
		<li><a href="/dashboard/support" on:click={drawerClose}><HelpCircle /> <span>Support</span></a></li>
		<li><a href="/dashboard/docs" on:click={drawerClose}><Book /> <span>Documentation</span></a></li>
	</ul>
</nav>
