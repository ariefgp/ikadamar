import '@/styles/globals.css'
import Navbar from './navbar'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html>
      <head />
      <body className="text-black  font-default">
        <Navbar />
        {children}
        </body>
    </html>
  )
}

export default RootLayout;