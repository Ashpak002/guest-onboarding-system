import React, { useState } from 'react';
import axios from 'axios';

const HotelRegistration = () => {
    const [formData, setFormData] = useState({ name: '', address: '', logo: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/hotels', formData);
            alert('Hotel Registered Successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Hotel Name" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="text" name="logo" placeholder="Logo URL" onChange={handleChange} required />
            <button type="submit">Register Hotel</button>
        </form>
    );
};

export default HotelRegistration;














// import React, { useState } from 'react';

// const HotelRegistration = () => {
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [logo, setLogo] = useState(null);

//     const handleRegistration = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('address', address);
//         formData.append('logo', logo);

//         try {
//             const response = await fetch('http://localhost:5000/hotels', {
//                 method: 'POST',
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//                 body: formData,
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 alert('Hotel added successfully');
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             alert('Error registering hotel');
//         }
//     };

//     return (
//         <form onSubmit={handleRegistration}>
//             <h2>Register Hotel</h2>
//             <input
//                 type="text"
//                 placeholder="Hotel Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//             />
//             <input
//                 type="file"
//                 onChange={(e) => setLogo(e.target.files[0])}
//                 required
//             />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default HotelRegistration;
