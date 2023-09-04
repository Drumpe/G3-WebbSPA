import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Logout = () => {

    const [, , removeCookie] = useCookies();
    const navigate = useNavigate();

 


    const handleLogout = () => {

        removeCookie('session', { path: '/' })
        localStorage.removeItem('token');
        navigate('/login');
        setIsLoggedIn(false); // Update the login status on logout
    };

    return (
        <button
            onClick={handleLogout}
            className="nav-link btn-link dark-theme-button" 
        >
            Logga in
        </button>
    );
};

export default Logout;