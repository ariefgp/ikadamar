import '@/styles/globals.css'
import Navbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="text-black  font-default">
        {children}
        </body>
    </html>
  )
}
