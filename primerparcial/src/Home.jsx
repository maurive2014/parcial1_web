import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "./assets/run.jpg";
import CardModal from './CardModal';
import cycling from "./assets/cycling.jpg";
import swimming from "./assets/background.jpg";
import { useState, useEffect } from 'react';
import { FaRunning, FaSwimmer, FaBicycle } from 'react-icons/fa'; 


function Home() {


    const array = [0,1,2,3,4,5,6,7,8,9];
    const [ciudad, setCiudad] = useState("");
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [tiempoCorriendo, setTiempoCorriendo] = useState("");
    const [distCorriendo, setDistCorriendo] = useState("");
    const [tiempoCycling, setTiempoCycling] = useState("");
    const [distCycling, setDistCycling] = useState("");
    const [tiempoSwimming, setTiempoSwimming] = useState("");
    const [distSwimming, setDistSwimming] = useState("");

    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [selectedCard, setSelectedCard] = useState(null); // Data for the selected card

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/test_schema.json?key=eecfef40')
        .then(response => response.json())
        .then(data => {
            setCiudad(data.ciudad);
            setNombre(data.nombre);
            setImagen(data.imagen);
            setTiempoCorriendo(data.tiempo_corriendo);
            setDistCorriendo(data.dist_corriendo);
            setTiempoCycling(data.tiempo_cycling);
            setDistCycling(data.dist_cycling);
            setTiempoSwimming(data.tiempo_swimming);
            setDistSwimming(data.dist_swimming);
        })
        .catch(error => console.error('Error:', error));
    }, [])

    // Handle card click
    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
        setShowModal(true);
    };

    // Handle modal close
    const handleClose = () => setShowModal(false);



    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md = {12} className="text-center">
                            <h1>Cycling</h1>
                        </Col>
                        {
                            array.map((_) =>
                            
                                <Col md = {6} className="d-flex gap-3">
                                <Card className="bg-dark text-white" onClick={() => handleCardClick('cycling')} style={{ cursor: 'pointer' }}>
                                <Card.Img src={cycling} alt="Card image" style={{ height: '130px', objectFit: 'cover' }}/>
                                <Card.ImgOverlay >
                                    <Card.Title style = {{"font-size": "15px"}}>Cycling session</Card.Title>
                                    <Card.Text style = {{"font-size": "7px"}}>
                                    Recorrido alrededor de la bahía de {ciudad}<br />
                                    {distCycling}K - {tiempoCycling}h
                                    </Card.Text>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col md = {12} className="text-center">
                            <h1>Running</h1>
                        </Col>
                        {
                            array.map((_) =>
                            
                                <Col md = {6}>
                                <Card className="bg-dark text-white" onClick={() => handleCardClick('running')} style={{ cursor: 'pointer' }}>
                                <Card.Img src={img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title style = {{"font-size": "15px"}}>Running session</Card.Title>
                                    <Card.Text style = {{"font-size": "8px"}}>
                                    Recorrido alrededor de la bahía de {ciudad}<br />
                                    {distCorriendo}K - {tiempoCorriendo}h
                                    </Card.Text>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                        
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col md = {12} className="text-center">
                            <h1>Swimming</h1>
                        </Col>
                        {
                            array.map((_) =>
                            
                                <Col md = {6}>
                                <Card className="bg-dark text-white" onClick={() => handleCardClick('swimming')} style={{ cursor: 'pointer' }}>
                                <Card.Img src={swimming} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title style = {{"font-size": "15px"}}>Swimming session</Card.Title>
                                    <Card.Text style = {{"font-size": "8px"}}>
                                    Recorrido alrededor de la bahía de {ciudad}<br />
                                    {distSwimming}K - {tiempoSwimming}h
                                    </Card.Text>
                                    <Card.Text></Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                        
                    </Row>
                </Col>

            </Row>
            <footer className="py-3 mt-4" style={{ backgroundColor: '#01616b', color: 'white' }}>
                <Container fluid>
                    <Row className="align-items-center">
                        {/* User's Image */}
                        <Col md={2}>
                            <img src={imagen} alt="User" className="img-fluid rounded-circle" style={{ width: '80px', height: '80px' }} />
                        </Col>

                        {/* User's Name */}
                        <Col md={3}>
                            <h5>{nombre}</h5>
                        </Col>

                        {/* Running Icon and Best Time */}
                        <Col md={2} className="d-flex align-items-center">
                            <FaRunning className="me-2" style={{ fontSize: '24px' }} />
                            <h5>{tiempoCorriendo}</h5>
                        </Col>

                        {/* Swimming Icon and Best Time */}
                        <Col md={2} className="d-flex align-items-center">
                            <FaSwimmer className="me-2" style={{ fontSize: '24px' }} />
                            <h5>{tiempoSwimming}h</h5>
                        </Col>

                        {/* Cycling Icon and Best Time */}
                        <Col md={2} className="d-flex align-items-center">
                            <FaBicycle className="me-2" style={{ fontSize: '24px' }} />
                            <h5>{tiempoCycling}h</h5>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <CardModal 
                showModal={showModal}
                handleClose={handleClose}
                selectedCard={selectedCard}
                ciudad={ciudad}
                tiempoCorriendo={tiempoCorriendo}
                distCorriendo={distCorriendo}
                tiempoCycling={tiempoCycling}
                distCycling={distCycling}
                tiempoSwimming={tiempoSwimming}
                distSwimming={distSwimming}
            />
        </Container>
    );
}

export default Home;