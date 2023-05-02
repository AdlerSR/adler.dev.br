<script lang="ts">
	export let data: any;

	let { post } = data;
</script>

<img src={post.feature_image} alt={post.title} />

<h1>{post.title}</h1>
<p>{post.reading_time} min read</p>

{@html post.html}
