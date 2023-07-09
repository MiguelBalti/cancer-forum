import { Link } from 'react-router-dom';
import { Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const ProjectCard = ({title, description, imgUrl, pageUrl }) => {
    return (
        <Router>
            <Col sm={6} md={4}>
            <div className="proj-imgbx">
                    <img src={imgUrl} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                        <br></br>
                        <br></br>
                        
                        <Link to={pageUrl}  target="_blank">
                            <h5>Ir a la página</h5>
                        </Link>
                       
                    </div>
            </div>
            </Col>
        </Router>

    )
}