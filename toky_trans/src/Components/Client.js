import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function Client(){
    return(
        <>
        <div className="title">
            <h4>Client</h4>
        </div>
        <div className="voyage">
            <div className="one">
                <div class="col-lg-12 bg-white rounded shadow">
                        <div class="table-responsive">
                            <table class="table table-fixed">
                                <thead>
                            <tr>
                                <th scope="col" class="col-2">id</th>
                                <th scope="col" class="col-2">Nom</th>
                                <th scope="col" class="col-2">Prenom</th>
                                <th scope="col" class="col-2">Contact</th>
                                <th scope="col" class="col-2">Voyage</th>
                                <th scope="col" class="col-2">Offre</th>
                            </tr>
                                </thead>
                                <tbody>
                            <tr>
                                <th scope="row" class="col-2">1</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">2</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">3</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">4</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">5</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">6</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">7</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">8</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">5</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">10</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
                            </tr>
                            <tr>
                                <th scope="row" class="col-2">11</th>
                                    <td class="col-2">Mark</td>
                                    <td class="col-2">Spector</td>
                                    <td class="col-2">21345</td>
                                    <td class="col-2">1</td>
                                    <td class="col-2">Premium</td>
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
            <div className="three">
                <Dropdown variant="btn-group" key="2">
                    <DropdownToggle color="secondary">Type</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">Vip</DropdownItem>
                            <DropdownItem href="#">Premium</DropdownItem>
                            <DropdownItem href="#">Lite</DropdownItem>
                        </DropdownMenu>
                </Dropdown> <br/> <br/> <br/> <br/> <br/>
                <Dropdown variant="btn-group" key="2">
                    <DropdownToggle color="secondary">Paye</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href="#">Payé</DropdownItem>
                            <DropdownItem href="#">Non Payé</DropdownItem>
                        </DropdownMenu>
                </Dropdown>
            </div>
        </div>              
           
    </>
    );
}