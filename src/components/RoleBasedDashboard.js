import React from 'react';
import { Link } from 'react-router-dom';

const RoleBasedDashboard = ({ role }) => {
    return (
        <div>
            <h2>{role === 'main-admin' ? 'Main Admin Dashboard' : 'Guest Admin Dashboard'}</h2>
            <ul>
                {role === 'main-admin' && <li><Link to="/hotels">Manage Hotels</Link></li>}
                {role === 'guest-admin' && <li><Link to="/guests">Manage Guests</Link></li>}
            </ul>
        </div>
    );
};

export default RoleBasedDashboard;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const RoleBasedDashboard = () => {
//     const role = localStorage.getItem('role'); // Assuming role is saved in local storage during login.

//     return (
//         <div className="dashboard">
//             <h2>{role === 'main-admin' ? 'Main Admin Dashboard' : 'Guest Admin Dashboard'}</h2>
//             <ul>
//                 {role === 'main-admin' && <li><Link to="/hotels">Manage Hotels</Link></li>}
//                 {role === 'guest-admin' && <li><Link to="/guests">Manage Guests</Link></li>}
//             </ul>
//         </div>
//     );
// };

// export default RoleBasedDashboard;
