import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './login.css';

//import App from 'main.jsx'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['session']);

    

        const handleLogin = async () => {
            const body = {
                "username": username, "password": password
            }
            const response = await fetch(`/authenticate/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if (response.status === 200) {
                setCookie('session', 'test', { path: '/' });
                localStorage.setItem("token", data.token)
                navigate('/mainPage');
            } else {
                alert('Wrong credentials.');
            }
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }


    
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card login-container">
                            <div className="card-body text-center">
                                <h2>Logga in</h2>
                                <div className="container">
                                    <div className="row">
                                        <form onSubmit={handleSubmit}>
                                            <div className="col-md-12 mb-3">
                                                <label style={{ fontWeight: 'bold', marginBottom: '2px', display: 'block' }}>Username:</label>
                                                <input
                                                    type="text"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    style={{ width: '75%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label style={{ fontWeight: 'bold', marginBottom: '2px', display: 'block' }}>Password:</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    style={{ width: '75%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                                                />
                                            </div>
                                            <div className="col-md mb-3 d-flex justify-content-between">
                                                <button className="btn btn-sm btn-primary" type="submit" onClick={handleLogin}>
                                                    Login
                                                </button>
                                                <a type="button" href="/register">
                                                    Create a new account
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;