import '../styles/globals.scss';
import '../styles/base/typography.scss'
import Head from 'next/head'
import Layout from "../components/BaseLayout/Layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Head>
                <title>DeDali</title>
                <link href={`/fonts/fonts.css`} rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
