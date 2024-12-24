import React, { useState } from 'react';
import axios from 'axios';

const GuestForm = ({ hotelId }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        address: '',
        purpose: '',
        stayFrom: '',
        stayTo: '',
        email: '',
        idProof: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/guests/${hotelId}`, formData);
            alert('Guest information submitted successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <select name="purpose" onChange={handleChange} required>
                <option value="">Purpose of Visit</option>
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
                <option value="Tourist">Tourist</option>
            </select>
            <input type="date" name="stayFrom" onChange={handleChange} required />
            <input type="date" name="stayTo" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="idProof" placeholder="ID Proof" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};


export default GuestForm;







// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const GuestForm = () => {
//     const { hotelId } = useParams();
//     const [guestDetails, setGuestDetails] = useState({
//         fullName: '',
//         mobile: '',
//         address: '',
//         purpose: 'Business',
//         stayFrom: '',
//         stayTo: '',
//         email: '',
//         idProof: '',
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`http://localhost:5000/guests`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ ...guestDetails, hotelId }),
//             });
//             if (response.ok) {
//                 alert('Thank you for submitting your details!');
//             } else {
//                 alert('Failed to submit details');
//             }
//         } catch (error) {
//             alert('Error submitting details');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Guest Form</h2>
//             <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={guestDetails.fullName}
//                 onChange={(e) => setGuestDetails({ ...guestDetails, fullName: e.target.value })}
//                 required
//             />
//             {/* Similar input fields for other details */}
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default GuestForm;
