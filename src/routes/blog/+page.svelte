<script lang="ts">
	export let data: any;

	let { posts } = data;
</script>

{#if posts}
	{#each posts as post}
		<a href={`/blog/post/${post.slug}`}>
			<h1>{post.title}</h1>
		</a>
	{/each}
{/if}
