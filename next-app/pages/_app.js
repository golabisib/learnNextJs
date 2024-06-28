import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <div>Header</div>
  <Component {...pageProps} />
  <div>Footer</div>
  </>)
}

export default MyApp
