import React from 'react';
//import '/public/css/site.css';
import Theme from './Theme'





function Navbar() {

    
  
 
    return (
        <nav className="navbar navbar-expand-lg border-bottom box-shadow">

            <div className="container navcontainer">

                <a className="navbar-brand" href="#">

                    <img src="/public/Images/Logo1.png" alt="Atlas Portal">
                    
                    </img>

                </a>


           
                 
               

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/mainPage?limit=10">Nyheter</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="?topic=Idrott&limit=10">Sport</a>
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

                    <ul className="navbar-nav mr-auto">



                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Fler Artiklar

                            </a>


                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <dt className="col"><a className="dropdown-item-custom" href="?topic=SamhalleKonflikter&sortBy=">Samhälle & Konflikter</a></dt>
                                    <dt className="col"><a className="dropdown-item-custom" href="?topic=Miljo&sortBy=">Miljö</a></dt>

                                    <dt className="col"><a className="dropdown-item-custom" href="?topic=LivsstillFritt&sortBy=">Livsstil & Fritid</a></dt>
                                    <dt className="col"><a className="dropdown-item-custom" href="?topic=Ekonomi&sortBy=">Ekonomi</a></dt>


                                </div>


                            </div>
                        </li>
                    </ul>

                </ul>

           
          
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a
                            href="/Login"
                            className="nav-link"
                        >
                            Logga in
                        </a>
                    </li>
                    
                </ul>
            </div>

            <Theme />

        </nav>
    );
}

export default Navbar;