import "./globals.css";
import Script from "next/script";

// export const metadata = {
//   title: "iNoah",
//   description: 'Welcome to my portfolio!',
//   openGraph: {
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     siteName: 'inoah.dev',
//     images: [
//       {
//         url: "/screenshot.png"
//       }
//     ],
//     locale: 'en-GB',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'iNoah',
//     description: 'Welcome to my portfolio!',
//     creator: '@NoxhDevs',
//     images: ['/screenshot.png'],
//   },
//   category: 'technology',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5K5MNE4T7X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5K5MNE4T7X');
        `}
      </Script>
    </html>
  );
}
