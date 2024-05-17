import './style.css'
import './temas/01-tipos-basicos'
import './temas/02-interfaz-objeto'
import './temas/03-funciones'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`
console.log('Hola mundo');