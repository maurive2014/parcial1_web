import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "./run.jpg";
import { useState, useEffect } from 'react';

function Home() {


    const array = [0,1,2,3,4,5,6,7,8,9]


    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col md = {12}>
                            <h1>Cycling</h1>
                        </Col>
                        {
                            array.map((num) =>
                            
                                <Col md = {6}>
                                <Card className="bg-dark text-white">
                                <Card.Img src={img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style = {{color:"red"}}>
                                    Cycling Session
                                    Recorrido alrededor de la bahía de 
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col md = {12}>
                            <h1>Running</h1>
                        </Col>
                        {
                            array.map((num) =>
                            
                                <Col md = {6}>
                                <Card className="bg-dark text-white">
                                <Card.Img src={img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style = {{color:"red"}}>
                                    Running Session
                                    Recorrido alrededor de la bahía de 
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                        
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col md = {12}>
                            <h1>Swimming</h1>
                        </Col>
                        {
                            array.map((num) =>
                            
                                <Col md = {6}>
                                <Card className="bg-dark text-white">
                                <Card.Img src={img} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text style = {{color:"red"}}>
                                    Swimming Session
                                    Recorrido alrededor de la bahía de 
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        
                            )
                        }
                        
                    </Row>
                </Col>

            </Row>
            
        </Container>
    );
}

export default Home;