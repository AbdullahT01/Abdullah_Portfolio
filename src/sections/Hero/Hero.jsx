import styles from './HeroStyles.module.css'; 
import heroImg from '../../assets/me.webp';
import themeIcon from '../../assets/sun.svg';
import Link_Icon from '../../assets/linkedin-light.svg'
import Github_Icon from '../../assets/github-light.svg'


function Hero() {
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
        </div>
    </section>
  )
}

export default Hero
