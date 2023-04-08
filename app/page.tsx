import { Inter } from 'next/font/google'
import CoreTracks from './components/widgets/CoreTracks'
import { Hero } from './components/widgets/Hero/page'
import { SpecializedTracks } from './components/widgets/SpecializedTracks'
import ProOutcome from './components/widgets/ProOutcome/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreTracks />
      <SpecializedTracks />
      <ProOutcome />
    </div>
  )
}
