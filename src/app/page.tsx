import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import PreviousWork from '@/components/PreviousWork'
import LifeCulture from '@/components/LifeCulture'
import ContactCard from '@/components/ContactCard'
import HireMeCard from '@/components/HireMe'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 min-w-0">
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
        <PreviousWork/>
        <LifeCulture/>
        <ContactCard/>
        <HireMeCard/>
        <Footer/>
      </main>
    </div>
  )
}
