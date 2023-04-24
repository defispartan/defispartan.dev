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
        <link rel="preload" as="image" href="/bg.wp" type="image/webp" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;