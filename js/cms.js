
    const heroImage = document.getElementById('hero-image')
    const heroHeading = document.getElementById('hero-head')
    const heroCopy = document.getElementById('hero-copy')


function render (heroImage, hero_image, heroHeading, hero_copy) {
  hero_img.backgroundImage = `url('${hero_image}')`
  hero_heading.innerHTML = `${hero_heading}`
  hero_copy.innerHTML = `${hero_copy}`
}

  
  (async function () {

    
    let about = await fetch('cms/_posts/home.json')
    let ready = await about.json()
    
    let { hero_image } = ready
    let { hero_heading } = ready
    let { hero_copy } = ready
  
    render (heroImage, hero_image, heroHeading, hero_copy)

  })()
  