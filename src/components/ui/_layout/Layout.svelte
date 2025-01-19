<!-- root直下のlayout -->
<script lang="ts">
	import Header from '$ui/_layout/Header/Header.svelte'
	import Footer from '$ui/_layout/Footer/Footer.svelte'
</script>

<div class="h-screen overflow-auto">
	<Header />
	<main class="mt-14 bg-gray-50 overflow-auto min-h-[calc(100vh-168px)]">
		<slot />
	</main>
	<Footer />
</div>
