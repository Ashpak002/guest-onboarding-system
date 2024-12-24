import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default AdminLogin;













// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const AdminLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/auth/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 localStorage.setItem('token', data.token);
//                 history.push('/dashboard');
//             } else {
//                 alert(data.message);
//             }
//         } catch (error) {
//             alert('Error logging in');
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <h2>Admin Login</h2>
//             <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default AdminLogin;
