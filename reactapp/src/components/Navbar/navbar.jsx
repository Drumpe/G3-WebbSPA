import Theme from './Theme'
import { setTopic } from '../../pages/Articles/redux/topicSortSlice';
import { useDispatch } from 'react-redux';
import Logout from '../Logout';
import SearchBox from './Search/searchBox'

function Navbar() {

    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg border-bottom box-shadow">

            <Theme />
            <div className="container navcontainer">

                <ul className="navbar-nav mx-auto">
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
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Halsa"))}>Hälsa</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Ekonomi"))}>Ekonomi</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Politik"))}>Politik</a></dt>
                                <dt className="col"><a className="dropdown-item-custom" onClick={() => dispatch(setTopic("Utbildning"))}>Utbildning</a></dt>
                            </div>
                        </li>
                    </ul>
                </ul>

                <ul className="navbar-nav ml-auto no-underline">
                    <div className="nav-item">
                        <SearchBox />
                    </div>
                    <li className="nav-item" style={{ marginLeft: '60px', marginTop: '11px' }}>
                        <Logout />
                    </li>
                </ul>

            </div>



        </nav>
    );
}
export default Navbar;