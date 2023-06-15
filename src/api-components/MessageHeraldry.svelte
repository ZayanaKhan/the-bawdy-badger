<script>
    import { GetMessageHeraldryRoute } from "../lib/routes";
    export let messageHash = "";
    let heraldry = "";
    let promise = doFetch(messageHash);

    async function doFetch(hash) {
        const response = await fetch(GetMessageHeraldryRoute(hash));
        heraldry = await response.text();
    }

    $: doFetch(messageHash);
</script>

{#await promise}
    <p>await</p>
{:then value}
    {heraldry}
{:catch error}
    <p>error</p>
{/await}
