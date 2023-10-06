import webdev from "../assets/img/webdev.svg";
import graphdes from "../assets/img/graphdes.svg";
import oop from "../assets/img/oop.svg";
import sql from "../assets/img/sql.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                        <h2>Technical Skills</h2>
                        <p>I am currently on my road to be a web and web application developer<br></br>I also have deep interests with graphic design.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webdev} alt="Image" />
                                <h5>Front-end Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={graphdes} alt="Image" />
                                <h5>Graphic Design</h5>
                            </div>
                            <div className="item">
                                <img src={oop} alt="Image" />
                                <h5>Object-oriented programming</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>Databases</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
