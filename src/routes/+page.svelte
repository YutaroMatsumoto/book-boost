<script>
  let { data } = $props();

  $effect(() => {
    console.log({data})
  })

</script>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>