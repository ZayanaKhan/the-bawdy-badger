<script>
    import { GetMessageTimeServerHourRoute } from "../lib/routes.js";
    export let messageHash = "";
    let time = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageTimeServerHourRoute(hash));
        time = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {time}
{:catch error}
    <p>error</p>
{/await}
