import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                <li><Link to="/hotels">Manage Hotels</Link></li>
                <li><Link to="/guests">Manage Guests</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;