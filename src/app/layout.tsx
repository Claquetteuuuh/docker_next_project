import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={outfit.className}>
      <body className="text-[#023246] p-10 h-screen w-screen">{children}</body>
    </html>
  );
}
