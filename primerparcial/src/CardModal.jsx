import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "./assets/run.jpg";
import cycling from "./assets/cycling.jpg";
import swimming from "./assets/background.jpg";

const CardModal = (props) => {
  
  // Function to render card content based on the type
  const renderCard = (cardType) => {
    if (cardType === "cycling") {
      return (
        <Card className="bg-dark text-white" style={{ width: '100%' }}>
          <Card.Img src={cycling} alt="Card image" style={{ height: '300px', objectFit: 'cover' }} />
          <Card.ImgOverlay>
            <Card.Title>Cycling session</Card.Title>
            <Card.Text>
              Recorrido alrededor de la bahía de {props.ciudad}<br />
              {props.distCycling}K - {props.tiempoCycling}h
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    } else if (cardType === "running") {
      return (
        <Card className="bg-dark text-white" style={{ width: '100%' }}>
          <Card.Img src={img} alt="Card image" style={{ height: '300px', objectFit: 'cover' }} />
          <Card.ImgOverlay>
            <Card.Title>Running session</Card.Title>
            <Card.Text>
              Recorrido alrededor de la bahía de {props.ciudad}<br />
              {props.distCorriendo}K - {props.tiempoCorriendo}h
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    } else if (cardType === "swimming") {
      return (
        <Card className="bg-dark text-white" style={{ width: '100%' }}>
          <Card.Img src={swimming} alt="Card image" style={{ height: '300px', objectFit: 'cover' }} />
          <Card.ImgOverlay>
            <Card.Title>Swimming session</Card.Title>
            <Card.Text>
              Recorrido alrededor de la bahía de {props.ciudad}<br />
              {props.distSwimming}K - {props.tiempoSwimming}h
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    }
  };

  return (
    <Modal show={props.showModal} onHide={props.handleClose} size="lg" centered>
      <Modal.Body>
        {props.selectedCard && renderCard(props.selectedCard)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
