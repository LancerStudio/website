import 'alpinejs'
import microlight from './lib/microlight'

document.querySelectorAll('.prose pre code').forEach(el => {
  el.classList.add('microlight')
})
microlight.reset()
