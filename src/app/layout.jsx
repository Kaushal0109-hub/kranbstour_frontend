import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kranbstour.com"),
  title: "KranbsTour — Your Dream Tour to Agra, Delhi & Jaipur",
  description:
    "Colourful, private journeys to the Taj Mahal, historic Delhi and royal Jaipur. Explore India's Golden Triangle with KranbsTour.",
  openGraph: {
    title: "KranbsTour — Your Dream Tour to Agra, Delhi & Jaipur",
    description: "Agra, Delhi, Jaipur and Golden Triangle tours, planned around you by KranbsTour.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
