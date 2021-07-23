import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {setLogin} from '../helpers/axiosWithAuth';


const Login = () => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route

    const history = useHistory();
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const doLogin = async (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setError('Username or Password not valid.');
            return;
        }

        if ((username === 'Lambda' && password === 'School')) {
            setError('');

            const result = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });
            window.localStorage.setItem('authToken', result.data.payload);
            setLogin(result.data.payload);
            history.push("/bubbles");
        } else {
            setError('Username or Password not valid.');
        }
    };

    return (
        <div>
            <h1>Welcome to the Bubble App!</h1>
            <div data-testid="loginForm" className="login-form">
                <h2>Please Login to Bubble</h2>
                <form onSubmit={doLogin}>
                    <input type="text" name="username" id="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                    <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" id="submit">Login</button>
                </form>
            </div>

            <p id="error" className="error">{error}</p>
        </div>
    );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
