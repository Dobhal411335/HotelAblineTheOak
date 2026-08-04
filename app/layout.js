import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import SessionWrapper from "@/components/SessionWrapper";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { SearchProvider } from "@/context/SearchContext";
import OverlayButton from "@/components/OverlayButton";
import GoogleTranslate from "@/components/GoogleTranslate";


export const metadata = {
  metadataBase: new URL("http://www.hotelablinetheoaks.com"),
  title: {
    default: "Welcome to Hotel Abline The Oaks, Tapovan – Rishikesh. Stay with Us: Hotel Abline The Oaks  ( a Boutique Hotel ) Luxury Premium Hotel in Tapovan, Rishikesh Call: +91 9410326904, 7409242920 Email: hotelablinetheoaks@gmail.com info@hotelablinetheoaks.com, Care@hotelablinetheoaks.com Web: www.hotelablinetheoaks.com",
    template: "%s | Hotel Abline The Oaks The Oaks",
  },
  description:
    "Nestled in the serene heart of Tapovan, Rishikesh, Hotel Abline The Oaks offers a beautiful blend of comfort, elegance, and warm hospitality. Designed to elevate your stay,create memorable stays for every guest, our hotel combines modern amenities with the charm of the Himalayas, ensuring a peaceful retreat for travelers seeking relaxation, adventure, or spiritual experiences in the Yoga Capital of the World.. Stay with Us: Hotel Abline The Oaks  ( a Boutique Hotel ) Luxury Premium Hotel in Tapovan, Rishikesh Call: +91 9410326904, 7409242920 Email: hotelablinetheoaks@gmail.com info@hotelablinetheoaks.com, Care@hotelablinetheoaks.com Web: www.hotelablinetheoaks.com Address: Secret Waterfall Rd, near Kundan Restaurant,Upper Tapovan, Rishikesh, Uttarakhand 249192",
  keywords:
    "Hotel Abline The Oaks the oaks, Hotel Abline The Oaks the oaks rishikesh, Yoga, website, rishikesh ,india, Hotel Abline The Oaks the oaks tapovan, Hotel Abline The Oaks the oaks tapovan rishikesh, Hotel Abline The Oaks the oaks tapovan rishikesh india, Hotel Abline The Oaks the oaks tapovan rishikesh india hotel",
  icons: { apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Hotel Abline The Oaks The Oaks",
    description:
      "Nestled in the serene heart of Tapovan, Rishikesh, Hotel Abline The Oaks offers a beautiful blend of comfort, elegance, and warm hospitality. Designed to elevate your stay,create memorable stays for every guest, our hotel combines modern amenities with the charm of the Himalayas, ensuring a peaceful retreat for travelers seeking relaxation, adventure, or spiritual experiences in the Yoga Capital of the World.. Stay with Us: Hotel Abline The Oaks The Oaks ( a Boutique Hotel ) Luxury Premium Hotel in Rishikesh More Inquiry Call +91 1354053504, +91 955770120, +91 9927677716Email:  hotelablinetheoaks@gmail.comHotel Address : NH-7, Rishikesh Delhi Highway Above Reliance Store Adjacent to Neem Karoli Temple Rishikesh 249203 (Uttarakhand)",
    type: "website",
    images: ["/logo.png"],
    url: "http://www.hotelablinetheoaks.com/",
    site_name: "Hotel Abline The Oaks The Oaks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Abline The Oaks The Oaks",
    description:
      "Nestled in the serene heart of Tapovan, Rishikesh, Hotel Abline The Oaks offers a beautiful blend of comfort, elegance, and warm hospitality. Designed to elevate your stay,create memorable stays for every guest, our hotel combines modern amenities with the charm of the Himalayas, ensuring a peaceful retreat for travelers seeking relaxation, adventure, or spiritual experiences in the Yoga Capital of the World.. Stay with Us: Hotel Abline The Oaks The Oaks ( a Boutique Hotel ) Luxury Premium Hotel in Rishikesh More Inquiry Call +91 1354053504, +91 955770120, +91 9927677716Email:  hotelablinetheoaks@gmail.comHotel Address : NH-7, Rishikesh Delhi Highway Above Reliance Store Adjacent to Neem Karoli Temple Rishikesh 249203 (Uttarakhand)",
    images: ["/logo.png"],
  },
  other: {
    "author": "Hotel Abline The Oaks The Oaks",
    "robots": "index, follow",
    "viewport": "width=device-width, initial-scale=1",
  },
};

export default function RootLayout({ children }) {
  const isPaid = process.env.NEXT_PUBLIC_IS_PAID === "true";

  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17806025818"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17806025818');
        `}
      </Script>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-17806025818/HiInCL7FyKscENrIyapC'});
        `}
      </Script>
      <body className={`font-gilda`}>
        {isPaid ? (
          <>
            <NextTopLoader color="#006eff" height={3} showSpinner={false} zIndex={1600} />
            <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 3000, style: { fontFamily: "var(--font-GildaDisplay)" } }} />
            <SessionWrapper>
              <SearchProvider>
                <Header />
                <GoogleTranslate />
                <main>
                  <OverlayButton />
                  {children}
                </main>
                <Footer />
              </SearchProvider>
            </SessionWrapper>
          </>

        ) : (
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold text-black text-center">
              Payment Pending. Please Contact Admin.
            </h1>
          </div>
        )}
      </body>
    </html>
  );
}
