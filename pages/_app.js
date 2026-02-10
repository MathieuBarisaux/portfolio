import "../styles/globals.scss";
import "../styles/reset.scss";

import Script from "next/script";
import { DeferredSplashCursor } from "../components/SplashCursor/DeferredSplashCursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DeferredSplashCursor />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', {client_storage: 'none',
anonymize_ip: true}, '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname, }); `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
