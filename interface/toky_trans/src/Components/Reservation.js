import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "./images/ld.png"

export default function Reservation(){
    return(
        <>
        <div className="logoForms bg-light">
        <div className="logo shadow bg-white" controlId="reserver">
            <img src={logo} height={550} width={800} alt=""/>
        </div>
        <div className="formulaire shadow bg-white">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nom et Prénom</Form.Label>
                <Form.Control type="input" placeholder="" />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="input" placeholder="+261 3* ** *** **" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Depart</Form.Label>
                <Form.Control type="input" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Arrivée</Form.Label>
                <Form.Control type="input" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Offre</Form.Label>
                <Form.Control type="input" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Voyager la nuit" />
              </Form.Group>
            <Button variant="danger" type="submit">
                Reserver
            </Button>
          </Form>
        </div>
        </div>
        </>
    );
}