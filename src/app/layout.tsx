import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";

// Import the Poppins font with different weights
const poppins = Poppins({
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohsin's Portfolio",
  description:
    "Mohsin Farooq’s portfolio – a frontend developer with over 2 years of experience in Angular and Nx Monorepos, showcasing efficient, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main
          className={`${poppins.variable} font-poppins w-full bg-dark-100 p-4 lg:p-6`}
        >
          <div className="relative flex lg:flex-row flex-col 2xl:gap-11 lg:gap-6 gap-5">
            <div className="lg:hidden block sticky top-0 z-50">
              <Navbar />
            </div>
            <div className="lg:w-[16.5rem] 2xl:w[18rem] relative lg:block hidden">
              <div className="lg:w-[16.5rem] fixed 2xl:w-[18rem] h-full py-6 top-0 rounded-3xl">
                <Sidebar />
              </div>
            </div>
            <div className="lg:flex-1 w-full overflow-y-auto bg-dark-100 rounded-3xl">
              {children}
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
