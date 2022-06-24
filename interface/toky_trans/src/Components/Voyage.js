import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function Voyage(){
    return(
        <>
        <div className="title">
            <h4>Voyage</h4>
        </div>
        <div className="voyage">
            <div className="one">
                <div class="col-lg-12 bg-white rounded shadow">
                        <div class="table-responsive">
                            <table class="table table-fixed">
                                <thead>
                            <tr>
                                <th scope="col" class="col-2">id</th>
                                <th scope="col" class="col-2">H</th>
                                <th scope="col" class="col-2">D</th>
                                <th scope="col" class="col-2">A</th>
                                <th scope="col" class="col-2">V</th>
                                <th scope="col" class="col-2">C</th>
                            </tr>
                                </thead>
                                <tbody>
                            <tr>
                                <th scope="row" class="col-2">1</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">2</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">3</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">4</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">5</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">6</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">7</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">8</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">5</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">10</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">11</th>
                                    <td class="col-2">18:00</td>
                                    <td class="col-2">Tana</td>
                                    <td class="col-2">Diego</td>
                                    <td class="col-2">21TD</td>
                                    <td class="col-2">Marc</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">Total</th>
                                    <td class="col-10">11</td>
                            </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            <div className="two">
                <Dropdown variant="btn-group" key="2">
                    <DropdownToggle color="secondary">Durée</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">Un jour</DropdownItem>
                            <DropdownItem href="#">Une semaine</DropdownItem>
                            <DropdownItem href="#">Un mois</DropdownItem>
                        </DropdownMenu>
                </Dropdown>
            </div>
        </div>              
           
    </>
    );
}