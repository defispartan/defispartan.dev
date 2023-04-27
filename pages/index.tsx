import Head from 'next/head'
import Home from '../src/modules/home/Home';

const App = () => {
  return (
    <>
      <Head>
        <title>defispartan.dev</title>
        <meta name="description" content="Homepage of DeFiSpartan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Media Metadata */}
        <meta property="og:title" content="defispartan.dev" />
        <meta property="og:description" content="Homepage of DeFiSpartan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.defispartan.dev" />
        <meta property="og:image" content="https://www.defispartan.dev/android-chrome-512x512.png" />
        <meta property="og:site_name" content="DeFiSpartan" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@defispartan" />
        <meta name="twitter:title" content="defispartan.dev" />
        <meta name="twitter:description" content="Homepage of DeFiSpartan" />
        <meta name="twitter:image" content="https://www.defispartan.dev/android-chrome-512x512.png" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;