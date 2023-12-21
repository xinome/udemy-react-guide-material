import '../styles/globals.css'
import { AppProvider } from '../context/AppContext'
import Layout1 from '../components/layout/layout1'

function MyApp({ Component, pageProps }) {
  // ここでレイアウトを指定する
  Component.getLayout = Component.getLayout ?? ((page) => 
    <Layout1>{page}</Layout1>
  )

  return (
    <AppProvider>
      <Layout1>
        <Component {...pageProps} />
      </Layout1>
    </AppProvider>
  )
}

export default MyApp
