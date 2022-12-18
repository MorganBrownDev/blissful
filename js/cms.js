
    const heroImage = document.getElementById('hero-image')
    const heroHeading = document.getElementById('hero-head')
    const heroCopy = document.getElementById('hero-copy')


function render (heroImage, heroimage, heroHeading, herocopy) {
  hero_img.backgroundImage = `url('${heroimage}')`
  hero_heading.innerHTML = `${heroheading}`
  hero_copy.innerHTML = `${herocopy}`
}

  
  (async function () {

    
    let about = await fetch('cms/_posts/home.json')
    let ready = await about.json()
    
    let { hero_image } = ready
    let { hero_heading } = ready
    let { hero_copy } = ready
  
    render (heroImage, heroimage, heroHeading, herocopy)

  })()
  