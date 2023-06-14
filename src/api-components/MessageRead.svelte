<script>
    import { GetMessageReadRoute } from "../lib/routes.js";
    export let messageHash = "";
    let read = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageReadRoute(hash));
        read = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {read}
{:catch error}
    <p>error</p>
{/await}
