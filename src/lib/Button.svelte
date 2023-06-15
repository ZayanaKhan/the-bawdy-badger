<script>
  let gif;
  let giflink;

  async function getGif() {
    const response = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=3AFajTqv6F4PcM45LGhrI7DGcD5eGq1r&tag=cat&rating=g`
    );
    gif = await response.json();

    let fig = document.createElement("figure");
    let img = document.createElement("img");
    img.src = gif.data.images.fixed_height.url;
    fig.appendChild(img);
    let out = document.querySelector(".out");
    out.insertAdjacentElement("afterbegin", fig);
  }
</script>

<button on:click={getGif}> Click here for a cat gif!! </button>

<div class="out" />
