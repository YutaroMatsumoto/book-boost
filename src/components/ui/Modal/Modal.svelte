<!-- 背景色を暗くし、ユーザーの注意を集中させるコンポーネント -->

<script lang="ts">
	import { createModal } from '$globalStates/modal'
	import LoginContent from '$ui/Modal/modalContent/LoginContent.svelte'
	import { useFocusTrap } from '$ui/Modal/useFocusTrap'

	let ref: HTMLDivElement | null = null

	const modal = createModal

	$: useFocusTrap(ref, $modal.status, modal.close)
</script>

<div id="modal">
	<!-- MEMO: modalは例外的にwarningをignoreする -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={modal.close} class="fixed inset-0 bg-black opacity-30" />
	<div
		class="absolute top-1/2 left-1/2 p-4 bg-white rounded-md -translate-x-1/2 -translate-y-1/2"
		role="dialog"
		aria-modal="true"
		bind:this={ref}
		aria-describedby="modal-describe"
	>
		{#if $modal.status === 'login'}
			<LoginContent />
		{/if}
	</div>
</div>

<!-- 以下属性は現状不要なので取り除く -->
<!-- aria-labelledby={$modal}
		aria-describedby={ariaDescribedby} -->
