import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Logout = () => {

    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();


    const handleLogout = () => {

        removeCookie('session', { path: '/' })
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="nav-link btn-link my-custom-button"
        >
            Logout
        </button>
    );
};

export default Logout;