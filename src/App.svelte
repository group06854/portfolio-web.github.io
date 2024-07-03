<script lang="ts">
  import Comic from './lib/Comic.svelte';
  import Content from './lib/Content.svelte';
  import router from "page";

let page = Content;

router('/', () => page = Content);
router('/Comic', () => page = Comic);

router.start();

</script>

<svelte:component this={page} />

<style>

</style>
