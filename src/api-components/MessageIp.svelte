<script>
    import { GetMessageIpRoute } from "../lib/routes.js";
    export let messageHash = "";
    let ip = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageIpRoute(hash));
        ip = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {ip}
{:catch error}
    <p>error</p>
{/await}
