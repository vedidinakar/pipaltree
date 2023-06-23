import Script from 'next/script'
import Layout from '../components/layout/layout-index'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const clarityEnv = process.env.NEXT_PUBLIC_CLARITY;
  
  return (
    <>
    { clarityEnv &&
    <Script type="text/javascript">
    {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityEnv}");`}
    </Script>
    }
    <Layout> <Component {...pageProps} /></Layout>
  </>
  )
}

export default MyApp
