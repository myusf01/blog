import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Auth0Provider } from "@auth0/auth0-react";

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
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Auth0Provider>
  );
}
 
export default MyApp;
