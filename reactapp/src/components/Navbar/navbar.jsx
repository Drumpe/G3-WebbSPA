import React from 'react';
import '/public/css/site.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom box-shadow">

            <div className="container navcontainer">

                <a className="navbar-brand" href="#">

                    <img src="/public/Images/Logo1.png" alt="Atlas Portal"></img>

                </a>


                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => this.populateArticleData("")}>Hem</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Mer

                        </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("")}>All</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("Halsa")}>Hälsa</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("SamhalleKonflikter")}>Samhälle och konflikt</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("Miljo")}>Miljö</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("VetenskapTeknik")}>Vetenskap & Teknik</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("LivsstillFritt")}>Livsstill & Frittid</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("Ekonomi")}>Ekonomi</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("Religion")}>Religion</a></dt>
                                <dt className="col"><a className="footer-nav-headline" onClick={() => this.populateArticleData("Idrott")}>Idrott</a></dt>
                                
                            </div>

                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nyheter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sport</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Kultur</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Livsstil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teknologi</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/src/components/login/Login.html" id="loginLink">Logga in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Prenumenera</a>
                    </li>
                </ul>
            </div>


            <div className="img-bg"><img id="theme-icon" src="/public/Images/moon-icon.png"></img>
            </div>
        </nav>
    );
}

export default Navbar;