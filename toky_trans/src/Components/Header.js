import React from "react";
import logo from './images/ld.png';
import img1 from './images/img1.jpg';

export default function Header() {
    return (
    <>
    <div class="position-fixed w-100 navbar-fixe">
    <nav class="navbar navbar-expand-lg bg-light py-0">
  <div class="container-fluid mx-5">
    <img class="rounded" src={logo} height={100} width={175}></img>

    <div class="navbar" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-dark px-4 fs-6" aria-current="page" href="#navbar">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark px-4 fs-6" href="#reserver">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark px-4 fs-6" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark px-4 fs-6" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." controlId="navbar"/>
      <div className="carousel-caption d-none d-md-block">
      <img src={logo} class="d-block w-100" alt="..."/>
        <h1>Voyagez comme vous le sentez</h1>
      </div>
    </div>
  </div>
</div>

</>
);
}
