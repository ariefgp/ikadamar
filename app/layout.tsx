import '@/styles/globals.css'
import Navbar from './components/navbar/Navbar'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html>
      <head />
      <body className="text-black  font-default">
        {children}
        </body>
    </html>
  )
}

export default RootLayout;