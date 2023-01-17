import "./globals.css";
import { Providers } from "@/components/Providers";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import Head from "./head";
import NavigationBar from "@/components/NavigationBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      {/* <Head /> */}
      <body>
        <Providers>
          <main className="dark:bg-primary-800 min-h-screen px-10 flex-col">
            <section title="Navigation Bar" className="mx-auto">
              <NavigationBar />
            </section>
            <section className="flex flex-grow">{children}</section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
