import styles from './HeroStyles.module.css'; 
import heroImg from '../../assets/me.webp';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import Link_light from '../../assets/linkedin-light.svg';
import Link_dark from '../../assets/linkedin-dark.svg';
import Github_light from '../../assets/github-light.svg';
import Github_dark from '../../assets/github-dark.svg';
import CV from '../../assets/Abullah_Taha_CV.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
    const {theme, toggleTheme} = useTheme(); 
    
    const themeIcon = theme === 'light' ? sun : moon;
    const Link_Icon = theme === 'light' ? Link_light : Link_dark;
    const Github_Icon = theme === 'light' ? Github_light : Github_dark;


  return (
    <section id='Hero' className={styles.container}> 
        <div className='styles.colorModeContainer'> 
          <img 
            className={styles.hero} 
            src= {heroImg} 
            alt="Profile picture of Abdullah Taha" 
          />
         <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
         />
        </div>

        <div className={styles.info}>
            <h1> Abdullah<br/> Taha</h1>
            <h2>Current Software Engineering Student</h2>
            <span>
                <a href="www.linkedin.com/in/abdullah-taha-b51430260" target='_blank'></a>
                <img src={Link_Icon} alt="Linkedin Icon" />
                
                <a href="https://github.com/AbdullahT01" target='_blank'></a>
                <img src={Github_Icon} alt="github Icon" />
            </span>
            <p> 
                Driven by a passion for continuous learning and innovation, I am dedicated to improving
                my skills in software engineering
            </p>
            <a href={CV} target="_blank">
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
