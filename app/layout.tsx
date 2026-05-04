import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcquisitionReady — Prepare Your Bootstrapped Startup for Sale",
  description: "Guided checklist and document preparation tool for bootstrapped founders getting acquired. Impress buyers and close faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee3c4ef5-4639-4d2c-8adc-868b8dc56925"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
