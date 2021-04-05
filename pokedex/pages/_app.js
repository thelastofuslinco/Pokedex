import 'tailwindcss/tailwind.css'
import { GlobalState } from '../src/global/GlobalState.js'

function MyApp({ Component, pageProps }) {
  return <GlobalState>
    <Component {...pageProps} />
  </GlobalState>
}

export default MyApp
