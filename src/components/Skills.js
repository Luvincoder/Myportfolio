import { FaPython, FaReact, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa"; // Web Dev Icons
import { DiDjango } from "react-icons/di"; // Django Icon
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign } from "react-icons/si"; // Graphic Design Icons
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are some of the skills and technologies I work with.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                            {/* Web Development Skills */}
                            <div className="item">
                                <FaPython size={80} color="#306998" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <FaReact size={80} color="#61DAFB" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <FaCss3Alt size={80} color="#1572B6" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <FaJs size={80} color="#F7DF1E" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <FaNodeJs size={80} color="#68A063" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <DiDjango size={80} color="#092E20" />
                                <h5>Django</h5>
                            </div>

                            {/* Graphic Design Skills */}
                            <div className="item">
                                <SiAdobephotoshop size={80} color="#31A8FF" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <SiAdobeillustrator size={80} color="#FF9A00" />
                                <h5>Illustrator</h5>
                            </div>
                            <div className="item">
                                <SiAdobeindesign size={80} color="#FF3366" />
                                <h5>InDesign</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
