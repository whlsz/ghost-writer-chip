import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghost Writer Chip | Golf Gear Reviews & Deals",
  description: "The most brutally honest golf gear reviews on the internet. Written by Chip, your 68-year-old Scottish caddie who's seen it all.",
  openGraph: {
    title: "Ghost Writer Chip",
    description: "Golf gear reviews from the caddie who never sugarcoats.",
    url: "https://blog.27aday.com",
    siteName: "Ghost Writer Chip",
    images: [{ url: "/images/chip-og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghost Writer Chip",
    description: "Golf gear reviews from the caddie who never sugarcoats.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        {/* Nav */}
        <nav className="border-b border-[#1F2937] bg-[#0A0A0A]/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <span className="text-[#C11230] font-bold text-xl tracking-tight">⛳</span>
              <span className="font-bold text-lg tracking-tight">Ghost Writer Chip</span>
              <span className="text-xs text-gray-500 hidden sm:block">honest golf. every day.</span>
            </a>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/reviews" className="hover:text-white transition-colors">Reviews</a>
              <a href="/deals" className="hover:text-white transition-colors">Deals</a>
              <a href="/about" className="hover:text-white transition-colors">About Chip</a>
              <a href="https://27aday.com" target="_blank" className="bg-[#C11230] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#a50f28] transition-colors">
                Get Deals →
              </a>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-[#1F2937] mt-24 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-[#C11230]">⛳</span>
                <span>Ghost Writer Chip · A BREW Labs / WHLSZ Project</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://27aday.com" className="hover:text-white transition-colors">27aDay App</a>
                <span>·</span>
                <a href="/about" className="hover:text-white transition-colors">About Chip</a>
                <span>·</span>
                <span>Affiliate links earn us a small commission at no cost to you.</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
