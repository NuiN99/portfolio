import { Nunito } from 'next/font/google'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Cai Plank | Game Programmer',
  description: "Cai Plank's game programming portfolio.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
