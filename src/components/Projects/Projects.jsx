import styles from "./ProjectsStyles.module.css";
import conciliacion from "../../assets/conciliacion.png";
import projets from "../../assets/projets.png";
import reconocimiento from "../../assets/reconocimiento.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={projets}
          link="https://github.com/jborbor"
          h3="Projets"
          p="Aplicacion para administracion de proyectos."
        />
        <ProjectCard
          src={conciliacion}
          link="https://github.com/jborbor/sql-ConciliacionBancaria-backend"
          h3="Bancos"
          p="Modulo de Conciliacion Bancaria."
        />
        <ProjectCard
          src={reconocimiento}
          link="https://github.com/jborbor"
          h3="FaceApp"
          p="Aplicacion de reconocimiento facial."
        />
      </div>
    </section>
  );
}

export default Projects;
