<script>
    import { GetMessageMetadataRoute } from "../lib/routes.js";
    export let messageHash = "";
    let metadata = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageMetadataRoute(hash));
        metadata = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {metadata}
{:catch error}
    <p>error</p>
{/await}
