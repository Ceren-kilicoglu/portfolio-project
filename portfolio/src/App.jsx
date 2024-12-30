import React from "react"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { DarkModeProvider } from "./contexts/DarkModeContext"


function App() {

  return (

    <DarkModeProvider >
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </DarkModeProvider>


  )
}

export default App
