<script lang="ts">
	import '../app.css'
	import Layout from '$ui/_layout/Layout.svelte'

	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
  import { setSession } from '$globalStates/session.svelte';
  import { setSupabase } from '$globalStates/supabase.svelte';
	// import { setUser } from '$globalStates/user'

	let { data, children } = $props()
  let { session, supabase } = $derived(data)
	// $: ({ supabase, session, userData } = data)

	$effect(() => {
		setSession(session)
		setSupabase(supabase)
	})

	$effect(() => {
		console.log("layout",{session})
	})


	// loadしたものは+layout内でcontextに入れた方が良いと判断
	// $: setUser(userData)
	// $: setSupabase(supabase)

	// 以下の処理の必要性について理解できてない。auth-helper利用時とそこまで変更はなさそうだが。
	onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

<Layout {session}>
	{@render children()}
</Layout>
