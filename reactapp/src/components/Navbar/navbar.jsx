import Theme from './Theme'
import { setTopic } from '../../pages/Articles/redux/topicSortSlice';
import { useDispatch } from 'react-redux';
import SearchBox from './Search/searchBox'

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg border-bottom box-shadow">

            <div className="container navcontainer">

                <a className="navbar-brand" href="#">

                    <img src="/public/Images/Logo1.png" alt="Atlas Portal">

                    </img>
                </a>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(setTopic("All"))}>Nyheter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(setTopic("Idrott"))}>Sport</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(setTopic("Religion"))}>Religion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(setTopic("LivsstilFritt"))}>Livsstil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(setTopic("VetenskapTeknik"))}>Teknologi</a>
                    </li>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Fler Artiklar
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("SamhalleKonflikter"))}>Samhälle & Konflikter</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Miljo"))}>Miljö</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("LivsstilFritt"))}>Livsstil & Fritid</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Ekonomi"))}>Ekonomi</a></dt>
                            </div>
                        </li>
                    </ul>
                </ul>
                <SearchBox />

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