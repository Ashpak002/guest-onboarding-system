import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QrCodePreview = ({ hotelId }) => {
    const [qrCode, setQrCode] = useState('');

    useEffect(() => {
        const fetchQrCode = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/hotels/${hotelId}/qr`);
                setQrCode(response.data.qrCode);
            } catch (error) {
                console.error(error);
            }
        };
        fetchQrCode();
    }, [hotelId]);

    return (
        <div>
            <h3>QR Code Preview</h3>
            {qrCode ? <img src={qrCode} alt="QR Code" /> : <p>Loading...</p>}
        </div>
    );
};

export default QrCodePreview;



















// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const QrCodePreview = () => {
//     const { hotelId } = useParams();
//     const [qrCode, setQrCode] = useState('');

//     const fetchQrCode = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/hotels/${hotelId}/qr`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setQrCode(data.qrCode);
//             } else {
//                 alert(data.message);
//             }
//         } catch (error) {
//             alert('Error fetching QR Code');
//         }
//     };

//     useEffect(() => {
//         fetchQrCode();
//     }, [hotelId]);

//     return (
//         <div className="qr-code-preview">
//             <h2>Hotel QR Code</h2>
//             {qrCode ? (
//                 <img src={qrCode} alt="QR Code" />
//             ) : (
//                 <p>Loading QR Code...</p>
//             )}
//         </div>
//     );
// };

// export default QrCodePreview;
