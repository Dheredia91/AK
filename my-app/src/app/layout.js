import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './globals.css'

export const metadata = {
  title: "Asphalt Kings",
  description: "Premium asphalt paving services",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
