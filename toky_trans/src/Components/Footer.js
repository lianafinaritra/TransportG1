import React from "react";
import logo from './images/ld.png';
import Card from 'react-bootstrap/Card';
import { CardImg } from "react-bootstrap";

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="footerOne">
                <Card.Body>
                    <CardImg class="rounded" src={logo} height={200} width={400}/>
                </Card.Body>
            </div>
            <div className="footerTwo">
                <Card.Body>
                    <h3>Voyagez comme vous le sentez</h3>
                </Card.Body>
            </div>
        </div>
        <Card.Header>
        <Card.Text>
            © 2022 Powered by Toky Transport Ivandry
        </Card.Text>
      </Card.Header>
    </>
    );
}