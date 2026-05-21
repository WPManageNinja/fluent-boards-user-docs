import DefaultTheme from 'vitepress/theme'
import './changelog.css'

/** Same rule as VitePress: absolute URLs and explicit protocols (mailto:, etc.). */
const EXTERNAL_HREF_RE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i

function patchExternalLinksInDoc() {
  document.querySelectorAll<HTMLAnchorElement>('.vp-doc a[href]').forEach((el) => {
    const href = el.getAttribute('href')
    if (!href || href.startsWith('#')) return
    if (!EXTERNAL_HREF_RE.test(href)) return
    el.setAttribute('target', '_blank')
    const rel = el.getAttribute('rel')
    if (!rel) {
      el.setAttribute('rel', 'noreferrer')
    } else if (!/\bnoreferrer\b/.test(rel)) {
      el.setAttribute('rel', `${rel} noreferrer`.replace(/\s+/g, ' ').trim())
    }
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    const run = () => queueMicrotask(patchExternalLinksInDoc)

    const prevRoute = router.onAfterRouteChange
    router.onAfterRouteChange = async (to) => {
      await prevRoute?.(to)
      run()
    }

    const prevPage = router.onAfterPageLoad
    router.onAfterPageLoad = async (to) => {
      await prevPage?.(to)
      run()
    }

    run()
  },
}
