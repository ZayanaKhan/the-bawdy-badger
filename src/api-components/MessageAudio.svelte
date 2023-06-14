<script>
    import { GetMessageAudioFileWavRoute } from '../lib/routes.js';
    export let messageHash = '';
    let audio;
 
    async function doFetch (hash) {
        audio = GetMessageAudioFileWavRoute(hash);
    }  
    
    $: doFetch(messageHash);

</script>

<audio controls>
    <source src="{audio}" type="audio/wav"/>
</audio>

