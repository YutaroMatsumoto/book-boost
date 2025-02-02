<script lang="ts">
	// import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	import Logo from '$ui/_layout/Logo/Logo.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	// import { getUser } from '$globalStates/user'
	// import UserAvatarButton from '$model/user/UserAvatarButton/UserAvatarButton.svelte'
	import { createModal } from '$globalStates/modal'
	import { getSession } from '$globalStates/session.svelte'
  import type { Session } from '@supabase/supabase-js';

	const { session } : {session: Session | null} = $props()
	

	const contextSession = $derived(getSession())
	const modal = createModal
</script>

<header class="fixed top-0 h-14 w-full bg-white shadow-sm z-100">
	<div class="h-full flex items-center justify-between px-2 py-6">
		<Logo />
		{#if session}
			<!-- <UserAvatarButton src={$user?.avatar_url} /> -->
			 ログインできてるね。
		{:else if !session}
			<PrimaryButton onclick={modal.login}>ログイン</PrimaryButton>
		{/if}
	</div>
</header>
