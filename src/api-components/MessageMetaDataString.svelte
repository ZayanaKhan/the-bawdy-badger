<script>
    import { GetMessageMetadataStringRoute } from "../lib/routes.js";
    export let messageHash = "";
    let string = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageMetadataStringRoute(hash));
        string = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {string}
{:catch error}
    <p>error</p>
{/await}
