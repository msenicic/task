import "@/scss/custom-bootstrap.scss";
import Script from "next/script";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "MSenicic - Task",
  description: "Task for front-end position",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page d-flex flex-column overflow-hidden min-vh-100">
          {children}
          <Footer />
        </div>
      </body>
      <Script src="/bootstrap/bootstrap.bundle.min.js" />
    </html>
  );
}