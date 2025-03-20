import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase authentication function
import { auth } from "firebaseConfig"; // Import Firebase auth instance

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");  // Stores user email
    const [password, setPassword] = useState("");  // Stores user password
    const [error, setError] = useState("");  // Stores error messages

    const handleLogin = async () => {
        try {
            // Firebase authentication - Logging in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            onLoginSuccess(userCredential.user); // Call function when login is successful
        } catch (error) {
            setError("Invalid email or password."); // Show error message
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
