import styles from './App.module.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Picture from './components/Picture/Picture';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Certifications from './components/Certifications/Certifications';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Picture/>
      <About/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Contact/>
    </div>
  )
}

export default App
