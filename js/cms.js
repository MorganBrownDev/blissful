
    const heroImage = document.getElementById('hero-image')
    const heroHeading = document.getElementById('hero-head')
    const heroCopy = document.getElementById('hero-copy')


function render (heroImage, heroimage, heroHeading, herocopy) {
  heroImage.backgroundImage = `url('${heroimage}')`
  heroHeading.innerHTML = `${heroheading}`
  heroCopy.innerHTML = `${herocopy}`
}

  
  (async function () {

    
    let about = await fetch('cms/_posts/home.json')
    let ready = await about.json()
    
    let { heroimage } = ready
    let { heroheading } = ready
    let { herocopy } = ready
  
    render (heroImage, heroimage, heroHeading, heroheading, heroCopy, herocopy)

  })()
  