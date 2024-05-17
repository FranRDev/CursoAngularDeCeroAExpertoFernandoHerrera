import './style.css'
import './temas/01-tipos-basicos'
import './temas/02-interfaz-objeto'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`
console.log('Hola mundo');