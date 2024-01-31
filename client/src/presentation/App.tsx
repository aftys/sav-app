import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '@pages/auth/Login';
import NoMatch from '@pages/noMatch';
import Signup from '@pages/auth/Signup';
import { RootState } from '@store/index';
import UnAuthorized from '@pages/unAutorized';
import AdminLayout from '@components/Layout/AdminLayout';
import Home from '@pages/admin/Home';
import AuthLayout from '@components/Layout/AuthLayout';
import Profile from '@pages/admin/Profile';
import Messages from '@pages/admin/Messages';
import Users from '@pages/admin/Users';
import ClientLayout from '@components/Layout/ClientLayout';
import AddCalendar from '@pages/AddCalendar';
import Reclamations from '@pages/Reclamations';
import Appointments from '@pages/Appointments';
import AdminPage from '@pages/admin/Home';
import Calender from '@pages/admin/Calender';




const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="w-screen h-screen flex flex-col items-center py-10 gap-6 bg-auth-light dark:bg-auth-dark">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route> 

          {/* client routes */}
          <Route element={<ClientLayout />}>
            <Route path="/add-calendar" element={<AddCalendar />} />
            <Route path="/rendez-vous" element={<Appointments />} />
            <Route path="/reclamations" element={<Reclamations />} />
            <Route path="/" element={<Home />} />
          </Route>

          {/* admin routes */}
          <Route element={<AdminLayout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<Users />} />
            <Route path='/dashboard' element={<AdminPage />} />
            <Route path='/calender'  element={<Calender/>}/>
          </Route>

          {/* UnAuthorized */}
          <Route path="/unauthorized" element={<UnAuthorized />} />

          {/* no match route */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;