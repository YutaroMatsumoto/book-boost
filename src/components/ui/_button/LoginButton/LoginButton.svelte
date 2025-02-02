<script>
	import { getSupabase } from '$globalStates/supabase.svelte'
	import GoogleIcon from '$ui/_icon/GoogleIcon.svelte'
  import { handleSignIn } from '$repositories/auth/repository';

	/**
	 * styleはgoogleのガイドラインに従う
	 * https://developers.google.com/identity/branding-guidelines?hl=ja
	 */

	const supabase = getSupabase()
</script>

<button class="flex items-center border border-gray-300 rounded-sm shadow-md p-2 cursor-pointer hover:bg-green-50" onclick={() => handleSignIn($supabase)}>
	<GoogleIcon />
	<span class="ml-6">Googleでログイン</span>
</button>
