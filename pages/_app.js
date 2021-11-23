import "../styles/globals.css";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-v8woudn1.eu.auth0.com"
      clientId="3LqtmGPjEGIaUOVCm6W6bOnu3ttrsk4Z"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
