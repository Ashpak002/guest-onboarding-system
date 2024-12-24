import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GuestList = ({ hotelId }) => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/guests/${hotelId}`);
                setGuests(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchGuests();
    }, [hotelId]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <h3>Guest List</h3>
            <button onClick={handlePrint}>Print Guest List</button>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Purpose</th>
                        <th>Stay Dates</th>
                        <th>Email</th>
                        <th>ID Proof</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((guest) => (
                        <tr key={guest._id}>
                            <td>{guest.fullName}</td>
                            <td>{guest.mobile}</td>
                            <td>{guest.address}</td>
                            <td>{guest.purpose}</td>
                            <td>{guest.stayFrom} to {guest.stayTo}</td>
                            <td>{guest.email}</td>
                            <td>{guest.idProof}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GuestList;















// import React, { useState, useEffect } from 'react';

// const GuestList = () => {
//     const [guests, setGuests] = useState([]);

//     const fetchGuests = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/guests', {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 },
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setGuests(data);
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             alert('Error fetching guests');
//         }
//     };

//     useEffect(() => {
//         fetchGuests();
//     }, []);

//     return (
//         <div className="guest-list">
//             <h2>Guest List</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Mobile</th>
//                         <th>Address</th>
//                         <th>Purpose</th>
//                         <th>Stay Dates</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {guests.map((guest) => (
//                         <tr key={guest._id}>
//                             <td>{guest.fullName}</td>
//                             <td>{guest.mobile}</td>
//                             <td>{guest.address}</td>
//                             <td>{guest.purpose}</td>
//                             <td>
//                                 {new Date(guest.stayFrom).toLocaleDateString()} -{' '}
//                                 {new Date(guest.stayTo).toLocaleDateString()}
//                             </td>
//                             <td>{guest.email}</td>
//                             <td>
//                                 <button onClick={() => alert('Edit functionality coming soon')}>
//                                     Edit
//                                 </button>
//                                 <button onClick={() => alert('View functionality coming soon')}>
//                                     View
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default GuestList;
