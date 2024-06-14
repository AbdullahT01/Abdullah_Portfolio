import './App.css'; 
import Hero from './sections/Hero/Hero';
import { ThemeProvider } from './common/ThemeContext';
import Projects from './sections/Hero/Projects/Projects';
function App() {
  

  return (
  <ThemeProvider>
    <Hero />
    <Projects/>
  </ThemeProvider>
  )
}

export default App
