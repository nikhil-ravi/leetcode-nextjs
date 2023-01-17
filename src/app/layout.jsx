import "./globals.css";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { Providers } from "./Providers";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { DarkModeButton } from "./DarkModeButton";
import Head from "./head";

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
          <main className="dark:bg-primary-800 min-h-screen px-10 flex-col overflow-y-scroll">
            <section title="Navigation Bar" className="min-w-full mx-auto">
              <nav className="flex pt-10 mb-12">
                <div className="flex-grow">
                  <h1 className="text-xl font-burtons text-left">
                    <Link href="/">scuffedcode</Link>
                  </h1>
                </div>
                <ul className="flex space-x-5 list-none m-0 p-0 text-right">
                  <li>
                    <DarkModeButton />
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/nikhil--ravi/">
                      <AiFillLinkedin className="cursor-pointer text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://scholar.google.com/citations?user=Ka5q7nIAAAAJ&hl=en">
                      <SiGooglescholar className="cursor-pointer text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/ChrisLawrieNikhilRavi/leetcode-nextjs">
                      <AiFillGithub className="cursor-pointer text-xl" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="flex flex-grow">{children}</section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
