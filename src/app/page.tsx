import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import PreviousWork from '@/components/PreviousWork'
import LifeCulture from '@/components/LifeCulture'
import ContactCard from '@/components/ContactCard'
import HireMeCard from '@/components/HireMe'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <PreviousWork/>
      <LifeCulture/>
      <ContactCard/>
      <HireMeCard/>
      <Footer/>
    </>
  )
}
