export const metadata = {
  title: {
    default: "Hotel Alabine The Oak CMS",
    template: "%s | Hotel Alabine The Oak CMS",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({ children }) {
  return <>{children}</>;
}
