import './App.css'; 
import Hero from './sections/Hero/Hero';
import { ThemeProvider } from './common/ThemeContext';
import Projects from './sections/Hero/Projects/Projects';
import Skills from './sections/Hero/Skills/Skills';
import Contact from './sections/Hero/Contact/Contact';
function App() {
  

  return (
  <ThemeProvider>
    <Hero />
    <Projects/>
    <Skills/>
    <Contact/>
  </ThemeProvider>
  )
}

export default App
