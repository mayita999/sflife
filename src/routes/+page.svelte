<script>
	import { fade } from 'svelte/transition';
	import blog from '$lib/blog.json'

	let nombre = 'Alexa';
	let edad = 20;
</script>

<h1 class="text-3xl font-bold p-10">
	Welcome to {blog.name}
</h1>

{#if edad >= 18 && (edad <= 50 || nombre == 'papi')}
	<div in:fade>
		<h1 class="text-2xl font-bold p-5">Posts</h1>
		<div class="w-96 m-auto mt-5">
			<ul class="menu menu-md bg-base-200 w-full rounded-box">
				{#each blog.posts as post, i}
					<li>
						<a href="/posts/{i}">{i+1}. {post.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
