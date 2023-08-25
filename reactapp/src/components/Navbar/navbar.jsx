import React from 'react';
//import '/public/css/site.css';
import Theme from './Theme'




function Navbar() {
 
    return (
        <nav className="navbar navbar-expand-lg border-bottom box-shadow">

            <div className="container navcontainer">

                <a className="navbar-brand" href="#">

                    <img src="/public/Images/Logo1.png" alt="Atlas Portal"></img>

                </a>


                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => populateArticleData("")}>Hem</a>

                    </li>


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Mer

                        </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <dt className="col"><a className="footer-nav-headline" href="?topic=Halsa&sortBy=">Hälsa</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=SamhalleKonflikter&sortBy=">Samhälle & Konflikter</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=Miljo&sortBy=">Miljö</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=VetenskapTeknik&sortBy=">Vetenskap & Teknik</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=LivsstillFritt&sortBy=">Livsstil & Fritid</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=Ekonomi&sortBy=">Ekonomi</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=Religion&sortBy=">Religion</a></dt>
                                <dt className="col"><a className="footer-nav-headline" href="?topic=Idrott&sortBy=">Idrott</a></dt>

                                
                            </div>

                        </div>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nyheter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="?topic=Idrott&sortBy=">Sport</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="?topic=Religion&sortBy=">Kultur</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="?topic=Halsa&sortBy=">Livsstil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="?topic=VetenskapTeknik&sortBy=">Teknologi</a>
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

            <Theme />

        </nav>
    );
}

export default Navbar;