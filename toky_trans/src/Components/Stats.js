import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function Stats(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hey, setHey] = useState(false);
    const close = () => setHey(false);
    const open = () => setHey(true);
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Pertes</Popover.Header>
          <Popover.Body>
               500 <strong>$</strong>
          </Popover.Body>
        </Popover>
      );
      const momover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Bénéfices</Popover.Header>
          <Popover.Body>
               1000 <strong>$</strong>
          </Popover.Body>
        </Popover>
      );
    return(
        <>
        <div className="statsOne">
            <h2>Vehicules :</h2>
            <Button variant="primary" onClick={handleShow}>
                En maintenance
            </Button>
            <Button variant="primary" onClick={open}>
                Disponible
            </Button>
        </div>
        <div className="statsOne">
        <h2>Finances :</h2>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button variant="primary">Pertes</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={momover}>
                <Button variant="primary">Bénéfices</Button>
            </OverlayTrigger>
        </div>
        
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>En maintenance</Offcanvas.Title>
        </Offcanvas.Header>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Matricule</th>
          <th>Maintenance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Total</td>
          <td colSpan={3}>5</td>
        </tr>
      </tbody>
    </Table>
      </Offcanvas>

      <Offcanvas show={hey} onHide={close}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Disponible</Offcanvas.Title>
        </Offcanvas.Header>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id vehicules</th>
          <th>Matricule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>Total</td>
          <td >5</td>
        </tr>
      </tbody>
    </Table>
      </Offcanvas>
        </>
    );
}