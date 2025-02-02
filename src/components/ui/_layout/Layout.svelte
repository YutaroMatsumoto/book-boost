<!-- root直下のlayout -->
<script lang="ts">
	import Header from '$ui/_layout/Header/Header.svelte'
	import Footer from '$ui/_layout/Footer/Footer.svelte'

	import { createModal } from '$globalStates/modal'
  import Modal from '$ui/Modal/Modal.svelte';
  import type { Session } from '@supabase/supabase-js';
	// import Modal from '$ui/Modal/Modal.svelte'

	// import { createSnackbar } from '$globalStates/snackbar'
	// import Snackbar from '$ui/Snackbar/Snackbar.svelte'

	const { session } : {session:Session | null} = $props()

	const modal = createModal
	// const snackbars = createSnackbar
</script>

<div class="h-screen overflow-auto">
	<Header {session} />
	<main class="mt-14 bg-gray-50 overflow-auto min-h-[calc(100vh-168px)]">
		<slot />
	</main>
	<Footer />
</div>

{#if $modal.status !== 'hidden'}
	<Modal />
{/if}

<!-- <div class={snackbarContainer}>
	{#each $snackbars as snackbar (snackbar.id)}
		<Snackbar status={snackbar.status} message={snackbar.message} />
	{/each}
</div>  -->
