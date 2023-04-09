import './globals.css'
import Header from './components/layout/Header/page'
import Footer from './components/widgets/Footer/page'
export const metadata = {
  title: 'Panaverse',
  description: 'Panaverse Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        {/* Header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
