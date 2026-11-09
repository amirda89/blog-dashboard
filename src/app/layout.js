import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Blog Dashboard",
  description: "Blog Dashboard web with DaisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="min-h-screen my-16 mx-auto max-w-7xl">{children}</main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={true}
          theme="dark"
          pauseOnHover={false}
        />
      </body>
    </html>
  );
}
