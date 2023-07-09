import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { iframe } from "./iframe";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/funsalud.png";
import projImg2 from "../assets/img/cima.png";
import projImg3 from "../assets/img/fucam.png";
import projImg4 from "../assets/img/imss.png";
import projImg5 from "../assets/img/war.png";
import projImg6 from "../assets/img/com.png";

export const Projects = () => {
   
    const projects = [ 
        {
            title: "FUNSALUD",
            description: "Trabaja para mejorar la calidad de vida de los pacientes con cáncer y promover la prevención y detección temprana de la enfermedad.",
            imgUrl: projImg1,
            pageUrl: "https://funsalud.org.mx/",
          },
          {
            title: "CIMA",
            description: "Brinda apoyo a niños y adolescentes con cáncer y a sus familias. Proporciona atención médica integral, incluyendo tratamientos y servicios psicológicos y sociales.",
            imgUrl: projImg2,
            pageUrl: "https://www.cimafundacion.org/",
          },
          {
            title: "FUCAM",
            description: "Se especializa en la detección, diagnóstico y tratamiento del cáncer de mama. Brinda servicios médicos como mastografías, ultrasonidos, biopsias, cirugías y rehabilitación.",
            imgUrl: projImg3,
            pageUrl: "https://fucam.org.mx/",
          },
          {
            title: "Fundación IMSS",
            description: "Se enfoca en la atención y prevención del cáncer, así como en la investigación científica en esta área. ",
            imgUrl: projImg4,
            pageUrl: "https://fundacionimss.org.mx/",
          },
          {
            title: "Fundación Cáncer Warriors de México",
            description: "Ofrece programas de acompañamiento emocional, asesoramiento legal y apoyo económico para tratamientos y servicios médicos",
            imgUrl: projImg5,
            pageUrl: "https://cancerwarriorsdemexico.org/",
          },
          {
            title: "Comparte Vida",
            description: "Facilita el acceso a tratamientos y medicamentos para pacientes con cáncer en situación vulnerable. " ,
            imgUrl: projImg6,
            pageUrl: "https://fundacioncompartevida.org.mx/",
          },
         
    ];
    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Fundaciones</h2>
                        <p>Organizaciones dedicadas a la investigación, apoyo y concienciación sobre esta enfermedad. Trabajan para recaudar fondos, financiar investigaciones y brindar recursos y servicios a los pacientes.</p>
                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Información</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Ubicación</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Videos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                      projects.map((project, index) => {
                                        return(
                                           <ProjectCard 
                                           key={index}
                                           {...project}
                                           /> 

                                        )
                                      })  
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                    <Row>
                                    <h1>FUNSALUD</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8890724344888!2d-99.15151865807782!3d19.287189551885053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01030a4a8775%3A0xd065caebd7a9209d!2sFundaci%C3%B3n%20Mexicana%20Para%20La%20Salud%2C%20A.C.!5e0!3m2!1ses!2smx!4v1686529752251!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />
                                    <h1>.</h1>
                                    <h1>.</h1>
                                    <h1>CIMA</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.966661017247!2d-99.18458911114504!3d19.413846399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffdd71ef44e9%3A0x418fc5baadd0e985!2sFundaci%C3%B3n%20CIMA!5e0!3m2!1ses!2smx!4v1686530026710!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />

                                    <h1>.</h1>
                                    <h1>.</h1>
                                    <h1>FUCAM</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60237.25134332419!2d-99.18824393785883!3d19.33325946596978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01adb45d378d%3A0x4c906305d3edb775!2sFUCAM%2C%20A.C.!5e0!3m2!1ses!2smx!4v1686530244804!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />

                                    <h1>.</h1>
                                    <h1>.</h1>
                                    <h1>Fundacion IMSS</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7429159984254!2d-99.17639392633544!3d19.42351074097418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff4ecf1d0c4d%3A0xdf916f4e00afcbb7!2sFundaci%C3%B3n%20IMSS%2C%20A.C.!5e0!3m2!1ses!2smx!4v1686530363918!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />

                                    <h1>.</h1>
                                    <h1>.</h1>
                                    <h1>Fundación Cáncer Warriors de México</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22030.69710638149!2d-99.19497094886593!3d19.427452998584798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffc2be2aedb1%3A0xfc89fb42176e7c2a!2sFundaci%C3%B3n%20Barra%20Mexicana%2C%20A.C.!5e0!3m2!1ses!2smx!4v1686530479083!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />

                                    <h1>.</h1>
                                    <h1>.</h1>
                                    <h1>Fundación Comparte Vida</h1>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.434500802996!2d-99.15071972633363!3d19.479933539170613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20201b2ccae61%3A0x75481ab62b10e2b4!2sFundaci%C3%B3n%20Comparte%20Vida%2C%20A.C.!5e0!3m2!1ses!2smx!4v1686530583938!5m2!1ses!2smx"
                                      width="400" 
                                      height="450" 
                                      allowfullscreen="" 
                                      loading="lazy" 
                                      referrerpolicy="no-referrer-when-downgrade"
                                    />


                                    </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">..
                                    <Row>
                                      <iframe width="560" height="315" src="https://www.youtube.com/embed/msr1nmDIbOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </Row>
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
}