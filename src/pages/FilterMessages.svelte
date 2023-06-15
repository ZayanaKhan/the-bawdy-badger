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

  $: GetMessage();

  const searchMessages = messages.map((message) => ({
    ...message,
    searchTerms: `${message.heraldry}`,
  }));

  const searchStore = createSearchStore(searchMessages);

  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="container">
  <h1>Search/Filter</h1>
  <input
    type="search"
    placeholder="Search..."
    bind:value={$searchStore.search}
  />
</div>

{#await promise}
  <p>await</p>
{:then value}
  {#each messages as message, i}
    <ul>
      Message {i + 1} <br />
      Date : <MessageDateTime messageHash={message.messageHash} />
      <br />
      Time : <br />
      Transcript : <MessageTranscript messageHash={message.messageHash} />
      <br />
      <!-- <MessageAudio messageHash={message.messageHash} /> <br /> -->
      Heraldry: <MessageHeraldry messageHash={message.messageHash} />
    </ul>
    <hr />
  {/each}
{:catch error}
  <p>error</p>
{/await}
