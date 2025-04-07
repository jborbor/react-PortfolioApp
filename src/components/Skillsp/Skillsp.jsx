import { useEffect } from "react";
import styles from "./SkillspStyles.module.css";
import tagBootstrap from "../../assets/TagCanvas/Bootstrap.png";
import tagCss from "../../assets/TagCanvas/css.png";
import tagGatsby from "../../assets/TagCanvas/gatsby.png";
import tagGit from "../../assets/TagCanvas/git.png";
import tagHtml from "../../assets/TagCanvas/html.png";
import tagJs from "../../assets/TagCanvas/js.png";
import tagLaravel from "../../assets/TagCanvas/laravel.png";
import tagLess from "../../assets/TagCanvas/less.png";

const skillsp = [
  { href: "#git_", src: tagBootstrap },
  { href: "#json_", src: tagCss },
  { href: "#solidity_", src: tagGatsby },
  { href: "#html_", src: tagGit },
  { href: "#react_", src: tagHtml },
  { href: "#python_", src: tagJs },
  { href: "#python_", src: tagLaravel },
  { href: "#python_", src: tagLess },
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
      maxSpeed: 0.03,
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
            <h2>fdnvfkjhbn</h2>

            <p className={styles.description}>
              With a passion for developing modern React web apps for commercial
              businesses.
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
