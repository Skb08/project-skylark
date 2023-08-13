import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Udaan AeroModelling Club | NITR ',
  description: ' We are a passionate group of engineers and aviation enthusiasts dedicated to the world of drones, RC planes, and rockets. Our club is a hub for the sharing of innovative ideas and the exchange of effective knowledge, favoring practical and theoretical advances in remodeling designs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
