import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestList';
import HotelRegistration from './components/HotelRegistration';
import RoleBasedDashboard from './components/RoleBasedDashboard';
import QrCodePreview from './components/QrCodePreview';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/hotels" element={<HotelRegistration />} />
                <Route path="/guests" element={<GuestList />} />
                <Route path="/guest-form/:hotelId" element={<GuestForm />} />
                <Route path="/qr-preview/:hotelId" element={<QrCodePreview />} />
            </Routes>
        </Router>
    );
};

export default App;




















// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AdminLogin from './components/AdminLogin';
// import RoleBasedDashboard from './components/RoleBasedDashboard';
// import HotelRegistration from './components/HotelRegistration';
// import GuestForm from './components/GuestForm';
// import GuestList from './components/GuestList';
// import QrCodePreview from './components/QrCodePreview';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={AdminLogin} />
//                 <Route path="/dashboard" component={RoleBasedDashboard} />
//                 <Route path="/hotels" component={HotelRegistration} />
//                 <Route path="/guests" component={GuestList} />
//                 <Route path="/guest-form/:hotelId" component={GuestForm} />
//                 <Route path="/qrcode/:hotelId" component={QrCodePreview} />
//             </Switch>
//         </Router>
//     );
// };

// export default App;
