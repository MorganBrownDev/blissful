

function render (head, message) {
    head.innerHTML = `${message}`
  }
  
  function render_img (hero, thumbnail) {
    hero.backgroundImage = `url('${thumbnail}')`
  }
  
  (async function () {
  
    const container = document.getElementById('head')
    const hero = document.getElementById('hero')
    
    let about = await fetch('cms/_posts/test.json')
    let ready = await about.json()
    
    let { message } = ready
    let { thumbnail } = ready
  
    render(head, message)
    render_img (hero, thumbnail)

  })()
  