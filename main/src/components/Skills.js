import { Container, Col, Row} from "react-bootstrap";
import { Link , Route , Routes} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/mujer.png";
import meter2 from "../assets/img/cancer_colon.png"; 
import meter3 from "../assets/img/cancer_piel.png";
import meter4 from "../assets/img/cancer_hueso.png";
import meter5 from "../assets/img/cancer_sangre.png";

import { BrowserRouter as Router } from "react-router-dom";


import Ca_piel from './Ca_piel';
import Ca_mama from './Ca_mama';
import Ca_colon from './Ca_colon';
import Ca_huesos from './Ca_huesos';
import Ca_sangre from './Ca_sangre';
import Ca from './ca';

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

        <Router>
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Tipos de Cáncer
                            </h2>
                            <p>
                            Existen numerosos tipos de cáncer, cada uno con características distintivas y desafíos únicos.<br></br><br></br>Para conocer más sobre los tipos presiona sobre ellos. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    
                                        <img src={meter1} alt="Image" />
                                        
                                        <Link to="/Ca_mama">
                                            <h5>Cáncer de mama</h5>
                                        </Link>
                                    
                                    
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <Link to="/Ca_colon">
                                        <h5>Cáncer de colon</h5>
                                    </Link>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <Link to="/Ca_piel">
                                        <h5>Cáncer de piel</h5>
                                    </Link>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <Link to="/Ca_huesos">
                                         <h5>Cáncer de huesos</h5>
                                    </Link>
                                    
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <Link to="/Ca_sangre">
                                        <h5>Leucemia</h5>
                                    </Link>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*<img className="background-image-left" src={colorSharp} />*/}
            <Routes>
                
                <Route path="/Ca_piel" element={<Ca_piel />} />
                <Route path="/ca" element={<Ca />} />
                <Route path="/Ca_mama" element={<Ca_mama />} />
                <Route path="/Ca_colon" element={<Ca_colon />} />
                <Route path="/Ca_huesos" element={<Ca_huesos />} />
                <Route path="/Ca_sangre" element={<Ca_sangre />} />
            </Routes>
        </section>
        </Router>
      )

}