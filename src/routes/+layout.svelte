<script lang="ts">
	import '../app.css'
	import Layout from '$ui/_layout/Layout.svelte'

	/** start supabase */
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import type { LayoutData } from './$types'
	// import { setUser } from '$globalStates/user'
	// import { setSupabase } from '$globalStates/supabase'
	// import { setSession } from '$globalStates/session'

	// // ここのdataは、おそらく+layout.tsのload関数の返り値
	let { data, children } = $props()
  let { session, supabase } = $derived(data)


	// $: ({ supabase, session, userData } = data)

	// loadしたものは+layout内でcontextに入れた方が良いと判断
	// $: setUser(userData)
	// $: setSupabase(supabase)
	// $: setSession(session)

	// 以下の処理の必要性について理解できてない。auth-helper利用時とそこまで変更はなさそうだが。
	onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  })
	/** end supabase */
</script>

<Layout>
	{@render children()}
</Layout>
