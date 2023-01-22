import Script from "next/script";
import * as gtag from "../lib/gtag";

export default function Head() {
  return (
    <>
      <title>ScuffedCode</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="My Leetcode journey" />
      <meta name="theme-color" content="#317EFB" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
