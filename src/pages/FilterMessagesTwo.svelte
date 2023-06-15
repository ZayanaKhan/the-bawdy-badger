<script>
  import { onMount } from "svelte";
  import { GetAllMessageHashesRoute } from "../lib/routes.js";
  import { searchHandler } from "../lib/stores/search.js";
  import { createSearchStore } from "../lib/stores/search.js";
  import { onDestroy } from "svelte";
  import MessageDateTime from "../api-components/MessageDateTime.svelte";
  import MessageTranscript from "../api-components/MessageTranscript.svelte";
  import MessageAudio from "../api-components/MessageAudio.svelte";
  import MessageHeraldry from "../api-components/MessageHeraldry.svelte";

  let messages = [];

  async function GetMessage() {
    const response = await fetch(GetAllMessageHashesRoute());
    messages = await response.json();
  }

  onMount(() => {
    GetMessage();
    const interval = setInterval(GetMessage, 3000);
    GetMessage();
    return () => clearInterval(interval);
  });

  let promise = messages;

  let search = "todo";

  let herald = "todo";

  $: GetMessage();
</script>

<div class="container">
  <h1>Search/Filter</h1>
  <input type="search" placeholder="Search..." />
  <!-- <input type="search" placeholder="Search..." bind:value={search} /> -->
</div>

{#await promise}
  <p>await</p>
{:then value}
  {#each messages as message, i}
    herald = <MessageHeraldry messageHash={message.messageHash} /> <br />

    {#if herald === search}
      <p>if is true</p>
      <br />
    {/if}
  {/each}
{:catch error}
  <p>error</p>
{/await}
