// Re-export default VitePress theme
import DefaultTheme from 'vitepress/theme'
import './index.css'
import ZoomableImage from './components/ZoomableImage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register ZoomableImage globally so the markdown renderer can emit it.
    // The guard avoids a duplicate-registration warning when enhanceApp runs
    // more than once (HMR, or multiple render passes).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  },
}
