import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pages//Register/register.css';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const body = {
            "username": username, "email": email, "password": password
        }
        const response = await fetch(`/authenticate/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        alert(data.message);
        if (response.status === 201) {
            navigate('/login');
        }
    };

    // TODO: add styles
    return (
        <div>
            
          

            <div className="login-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card registration-container">
                                <h2>Register</h2>
                                <div className="input-container">
                                    <label className="input-label">Username:</label>
                                    <input
                                        className="input-field"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <div className="input-container">
                                        <label className="input-label">Email:</label>
                                        <input
                                            className="input-field"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-container">
                                        <label className="input-label">Password:</label>
                                        <input
                                            className="input-field"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <button className="btn btn-sm btn-primary" type="button" onClick={handleRegister}>
                                        Register
                                    </button>
                                    <a className="register-link" href="/login">
                                        Already have an account? Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;