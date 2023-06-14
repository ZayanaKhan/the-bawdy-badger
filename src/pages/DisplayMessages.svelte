<script>
    import { onMount } from "svelte";
    import { GetAllMessageHashesRoute } from "../lib/routes.js";
    import MessageDateTime from "../api-components/MessageDateTime.svelte";
    import MessageTranscript from "../api-components/MessageTranscript.svelte";
    import MessageAudio from "../api-components/MessageAudio.svelte";

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
</script>

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
            <MessageAudio messageHash={message.messageHash} />
        </ul>
        <hr />
    {/each}
{:catch error}
    <p>error</p>
{/await}
