export class Router {
  routes = {} 

  add(routeName, page) {
    this.routes[routeName] = page
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname]

    this.updateBackground(pathname)

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

  updateBackground(pathname) {
    const body = document.querySelector('body')
    switch (pathname) {
      case '/':
        body.style.backgroundImage = "url('/assets/mountains-universe.png')"
        break
      case '/universe':
        body.style.backgroundImage = "url('/assets/mountains-universe2.png')"
        break
      case '/exploration':
        body.style.backgroundImage = "url('/assets/mountains-universe3.png')" 
        break
    }
  }
}
