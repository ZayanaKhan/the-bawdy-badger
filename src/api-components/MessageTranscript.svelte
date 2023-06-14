<script>
    import { GetMessageTranscriptRoute } from '../lib/routes.js';
    export let messageHash = '';
    let transcript = '';
    let promise = doFetch(messageHash);
 
    async function doFetch (hash){
        const response = await fetch(GetMessageTranscriptRoute(hash));
        transcript = await response.text();    
    }  
    
    $: doFetch(messageHash);

</script>

{#await promise}
    <p>await</p>
{:then value}
    {transcript}
{:catch error}
    <p>error</p>
{/await}

