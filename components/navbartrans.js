import React from "react";
import logo from './images/ld.png';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import './style.css';

function Nav() {
    return (
    <>
    <div class="position-fixed w-100 navbar-fixe">
    <nav class="navbar navbar-expand-lg bg-light py-0">
  <div class="container-fluid mx-5">
    <img class="rounded" src={logo} height={100} width={175}></img>

    <div class="navbar" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-dark px-4 fs-6" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark px-4 fs-6" href="#">About</a>
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
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>TokyTrans</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>TokyTrans</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>
);
}

export default Nav;