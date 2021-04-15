import 'tailwindcss/tailwind.css'
import '../src/styles/globals.css'
import { GlobalState } from '../src/global/GlobalState.js'

function MyApp({ Component, pageProps }) {
  return <GlobalState>
    <Component {...pageProps} />
  </GlobalState>
}

export default MyApp
