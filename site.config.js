const flecha = require('fecha')
const marked = require('marked')

module.exports = {
  name: "Lancer Studio",
  origin: 'https://lancer.studio',
  locales: ['en'],

  locals: {
    githubUrl: 'https://github.com/LancerStudio/lancer',
    formatBlogDate: (dateStr, format) => flecha.format(flecha.parse(dateStr, 'YYYY-MM-DD'), format),
  },

  templateTypes: {
    markdown(source) {
      return marked(source)
        .replace(/&lt;\/\/template&gt;/,'&lt;/template&gt;')
        .replace(/<aside>(.*)<\/aside>/g, (_, body) => wrapAside(body))
    }
  }
}

function wrapAside(body) {
  return (
`<aside>
  <!-- Heroicon name: solid/information-circle -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
  </svg>
  <div>${marked.parseInline(body)}</div>
</aside>
`
  )
}
