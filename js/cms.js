
function render_hero_image (heroImage, heroimage) {
  heroImage.backgroundImage = `'url('${heroimage}')'`
}

function render_hero_heading_text (heroHeading, heroheading) {
  heroHeading.innerHTML = `${heroheading}`
}

function render_hero_copy (heroCopy, herocopy) {
  heroCopy.innerHTML = `${herocopy}`
}

  
  (async function () {

    const heroImage = document.getElementById('hero-image')
    const heroHeading = document.getElementById('hero-head')
    const heroCopy = document.getElementById('hero-copy')

    
    let about = await fetch('cms/_posts/home.json')
    let ready = await about.json()
    
    let { heroimage } = ready
    let { heroheading } = ready
    let { herocopy } = ready
  
    render_hero_image (heroImage, heroimage)
    
    render_hero_heading_text (heroHeading, heroheading)

    render_hero_copy (heroCopy, herocopy)

  })()
  