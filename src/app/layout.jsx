import "./globals.css";
import { Providers } from "@/components/Providers";
import NavigationBar from "@/components/NavigationBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="dark:bg-primary-800 min-h-screen px-10 flex-col">
            <section title="Navigation Bar" className="flex flex-grow">
              <NavigationBar />
            </section>
            <section className="flex flex-grow">{children}</section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
