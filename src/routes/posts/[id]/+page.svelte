<script>
	export let data;
</script>

<h1 class="text-3xl font-bold underline p-10">{data.post.title}</h1>

<div class="card w-96 bg-base-300 shadow-xl m-auto">
	<div class="card-body">
		<h2 class="card-title">Tree</h2>
		<p>big tall tree</p>
	</div>
	<figure>
		{#if data.post.image}
			<img src="/images/{data.post.image}" alt="Shoes" />
		{:else}
			<p class="p-10 text-2xl">Not there yet...</p>
		{/if}
	</figure>
</div>
