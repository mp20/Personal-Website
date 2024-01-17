import { Outfit } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";

const outfit = Outfit({ weight: ["700"], subsets: ["latin"] });

export const metadata = {
  title: "Ariya Nazari | Software Engineer",
  description:
    "Portfolio of Ariya Nazari, a Software Engineer specializing in Full-Stack development and a Full time Georgia Tech student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
