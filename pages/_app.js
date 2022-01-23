import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Auth0Provider } from "@auth0/auth0-react";
import Head from "next/head";

// get provider info from env file.
function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT}
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >

      <div className="text-gray-700 ">
        <Header />
        <main className="mt-6 mb-20">
          <Head>
            <title>muhammed yusuf</title>
            <meta property="og:title" content="muhammed yusuf - blog" />
            <meta property="og:url" content={`https://myusuf.net/`} />
            <meta property="og:image" content='https://myusuf.net/_next/image?url=/public/img/ben.jpg' />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="merhaba, bloguma hoş geldin." />
            <meta name="twitter:card" content="summary_large_image"></meta>
          </Head>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
