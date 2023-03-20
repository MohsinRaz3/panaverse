import { Inter } from 'next/font/google'
import { Hero } from './components/widgets/Hero/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  )
}
