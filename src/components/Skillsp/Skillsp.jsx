import { useEffect } from "react";
import styles from "./SkillspStyles.module.css";
import tagAngular from "../../assets/TagCanvas/angular.png";
import tagAws from "../../assets/TagCanvas/aws.png";
import tagBootstrap from "../../assets/TagCanvas/bootstrap.png";
import tagDocker from "../../assets/TagCanvas/docker.png";
import tagGit from "../../assets/TagCanvas/git.png";
import tagJava from "../../assets/TagCanvas/Java-logo.png";
import tagMysql from "../../assets/TagCanvas/mysql.png";
import tagReact from "../../assets/TagCanvas/react.png";
import tagSpring from "../../assets/TagCanvas/spring.png";
import tagSql from "../../assets/TagCanvas/sql.png";
import tagAzure from "../../assets/TagCanvas/azure.png";
import tagJavascript from "../../assets/TagCanvas/javascript.png";

const skillsp = [
  { href: "#git_", src: tagAngular },
  { href: "#json_", src: tagAws },
  { href: "#solidity_", src: tagBootstrap },
  { href: "#html_", src: tagDocker },
  { href: "#react_", src: tagGit },
  { href: "#python_", src: tagJava },
  { href: "#python_", src: tagMysql },
  { href: "#python_", src: tagReact },
  { href: "#java_", src: tagSpring },
  { href: "#java_", src: tagSql },
  { href: "#java_", src: tagAzure },
  { href: "#java_", src: tagJavascript },
];

const Skillsp = ({ ...rest }) => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      //textColour: "#08FDD8",
      outlineColour: "0",
      textHeight: 25,
      reverse: false,
      depth: 0.8,
      initial: [0.2, -0.1],
      maxSpeed: 0.02,
      minSpeed: 0.02,
      wheelZoom: false,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className="sectionTitle">Skills</h1>

        <div className={styles.skillsContainer}>
          <div>
            <p className={styles.description}>
              Amplia Experiencia en el desarrollo de aplicaciones empresariales
              para el Sector Financiero, realizando actividades como:
            </p>
            <br />
            <p className={styles.description}>
              - Desarrollo de componentes web.
            </p>
            <p className={styles.description}>
              - Desarrollo y mantenimiento de Stored Procedures.
            </p>
            <p className={styles.description}>
              - Implementacion de pruebas unitarias y automatizadas.
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <h2>Herramientas y Tecnología</h2>

            <p className={styles.description}>
              Java, Spring Boot, SQL Server, MySQL, Angular, React, AWS, Git,
              Docker, JUnit, Mockito, Selenium, Cucumber, Serenity, Soap UI,
              Servicios REST, SCRUM, Azure Pipelines, Azure Devops...
            </p>
          </div>

          <div>
            <canvas
              id="tagcanvas"
              className={styles.tagCan}
              width="500"
              height="500"
            ></canvas>
            <div id="taglist">
              <ul>
                {skillsp.map((skill) => (
                  <li key={skill.href}>
                    <a href={skill.href} src="">
                      <img src={skill.src} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillsp;
