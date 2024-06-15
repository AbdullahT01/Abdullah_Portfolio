import styles from './projectsStyle.module.css';
import CAR_RENTAL from '../../../assets/car_rental_card.webp';
import FINANCE from '../../../assets/Finance_card.webp';
import PORTFOLIO from '../../../assets/portfolio.webp';
import ProjectCard from '../../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className= {styles.projectsContainer}>
        <ProjectCard 
            src = {CAR_RENTAL} 
            link={"https://github.com/AbdullahT01/Car-Rental-Service-project/tree/main/Sprint3"} 
            title = {"DriveDev"} 
            description={"Car Rental software using open AI API"}
        />

        <ProjectCard 
            src = {PORTFOLIO} 
            link={"https://github.com/AbdullahT01/Abdullah_Portfolio"} 
            title = {"Portfolio"} 
            description={"Portfolio website using React.js"}
        />

        <ProjectCard 
            src = {FINANCE} 
            link={"https://github.com/AbdullahT01/projects-finance"} 
            title = {"Finance"} 
            description={"Financial tracking application using only JS and CSS"}
        />
      </div>

      
    </section>
  )
}

export default Projects
