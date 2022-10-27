import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/*<link rel="shortcut icon" href={`img/icon.ico`}/>*/}
                    <meta name="keywords" content="polkadot, metaverse, dedali, web3, blockchain"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
