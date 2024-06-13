import './App.css'; 
import Hero from './sections/Hero/Hero';
import { ThemeProvider } from './common/ThemeContext';

function App() {
  

  return (
  <ThemeProvider>
    <Hero />
  </ThemeProvider>
  )
}

export default App
