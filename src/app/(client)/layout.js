import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/navigation/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ReduxProvider from "@/redux/Provider";
import ToastProvider from "@/components/ui/ToastProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Theme",
  description: "Made By alamin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-background antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ToastProvider />
            {children}

          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
