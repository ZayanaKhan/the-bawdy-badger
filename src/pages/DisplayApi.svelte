<script>
  import { onMount } from "svelte";
  import { GetAllMessageHashesRoute } from "../lib/routes";

  let messages = [];
  let api = GetAllMessageHashesRoute();

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
</script>

<p>The server is : {api}</p>
