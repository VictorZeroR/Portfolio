import StatusBar from '../components/home/StatusBar'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Experience from '../components/home/Experience'
import Projects from '../components/home/Projects'
import TechStack from '../components/home/TechStack'
import Education from '../components/home/Education'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <StatusBar />
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-16">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
