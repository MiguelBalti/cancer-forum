import { useState , useEffect } from "react";
import { Col } from 'react-bootstrap';
import { Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/equipo-medico2.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "esperanza", "información", "apoyo" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
          setDelta(prevDelta => prevDelta /2)  
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} me={6} xl={7}>
                        <span className="tagline">Bienvenido a ONKOS</span>
                        <h1>{' "Juntos contra el cáncer" '}<br></br><span className="wrap">{'Compartiendo '}{text}</span></h1>
                        <p>Aquí encontrarás un espacio lleno de información, recursos y apoyo para aquellos que enfrentan esta enfermedad y sus seres queridos. Nos comprometemos a brindarles inspiración, fortaleza y orientación a lo largo de su viaje</p>
                       {/* <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>*/}
                    </Col>
                    <Col xs={12} me={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}