import Head from 'next/head'
import Navbar from './Navbar'
import MailingList from './MailingList'
import Footer from './Footer'

interface Props {
  children: JSX.Element
  showMailingList?: boolean
}

export default function Layout({ children, showMailingList = false }: Props) {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-between">
      <Head>
        <meta name="og:title" content="Pipehogs" />
        <meta
          name="og:image"
          content="https://pipehogs.vercel.app/Pipehogs.png"
        />
        <meta
          name="og:description"
          content="Dominant athletes, dedicated scholars, and passionate foodies."
        />
        <title>Pipehogs</title>
        <meta
          name="description"
          content="Dominant athletes, dedicated scholars, and passionate foodies."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main className="text-gray-700 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto container">
        {children}
      </main>
      <div>
        {showMailingList && <MailingList />}
        <Footer />
      </div>
    </div>
  )
}
