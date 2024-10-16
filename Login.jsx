import React, { useState } from 'react';
import styles from "./Login.module.css";
import { useSelector } from 'react-redux';
import axios from 'axios';
import InputField from '../../components/inputField/inputField';
import qs from 'qs'; // This helps in formatting the form data properly

const Login = () => {
    const userToken = useSelector((state) => state.user.userToken);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState(""); // State to store the login message

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            // Use qs.stringify to convert your data into x-www-form-urlencoded format
            const response = await axios.post('http://localhost:8000/users/login', 
                qs.stringify({
                    email,
                    password,
                }), 
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    withCredentials: true,  // This allows cookies/credentials to be sent

                }
            );

            console.log(response.data);
            if (response.data.success) { // Assuming the response has a success field
                setLoginMessage("Login successful!"); // Set a success message
                // Handle successful login (e.g., save token, redirect)
            } else {
                setLoginMessage(response.data.message || "Login failed."); // Set a message for unsuccessful login
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setLoginMessage("Error logging in. Please try again."); // Set an error message
        }
    };

    return (
        <div className={styles.login_page}>
            <form onSubmit={submitLogin}>
                <InputField 
                    id="email" 
                    type="email" 
                    label="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <InputField 
                    id="password" 
                    type="password" 
                    label="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
            {loginMessage && <p>{loginMessage}</p>} {/* Display the login message */}
        </div>
    );
};

export default Login;
