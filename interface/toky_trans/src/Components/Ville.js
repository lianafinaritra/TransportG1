import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import tana from './images/tana.jpg';
import toliara from './images/toli.jpg';
import  diego from './images/dieg.jpg';
import tamatave from './images/tamat.jpg';

export default function Ville(){
    const [show, setShow] = useState(false);
    return(
        <>
        <div className="bg-light">
        <div className="title">
            <h4>Ville</h4>
        </div>
        <div className="cardVille">
            <div className='ville'>
                <Card className="bg-dark text-white">
                    <Card.Img src={diego} alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Antsiranana</Card.Title> <br/> <br/> <br/> <br/> <br/>
                    <Button variant="danger" onClick={() => setShow(true)}>
                        Infos
                    </Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ville'>
                <Card className="bg-dark text-white">
                    <Card.Img src={tana} alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Antananarivo</Card.Title> <br/> <br/> <br/> <br/> <br/>
                    <Button variant="danger" onClick={() => setShow(true)}>
                        Infos
                    </Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ville'>
                <Card className="bg-dark text-white">
                    <Card.Img src={tamatave} alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Tamatave</Card.Title> <br/> <br/> <br/> <br/> <br/>
                    <Button variant="danger" onClick={() => setShow(true)}>
                        Infos
                    </Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='ville'>
                <Card className="bg-dark text-white">
                    <Card.Img src={toliara} alt="Card image" />
                    <Card.ImgOverlay>
                    <Card.Title>Toliara</Card.Title> <br/> <br/> <br/> <br/> <br/>
                    <Button variant="danger" onClick={() => setShow(true)}>
                        Infos
                    </Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
        </div>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Ville
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="one">
                <div class="col-lg-12 bg-white rounded shadow">
                        <div class="table-responsive">
                            <table class="table table-fixed">
                                <thead>
                            <tr>
                                <th scope="col" class="col-4">Depart</th>
                                <th scope="col" class="col-4">Arrivee</th>
                                <th scope="col" class="col-4">Passer par</th>
                            </tr>
                                </thead>
                                <tbody>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                                    <td class="col-4">test</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-4">Total</th>
                                    <td class="col-8">11</td>
                            </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
                </Modal.Body>
                </Modal>
        </>
    );
}