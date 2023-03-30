import './App.css';
import { Routes, Route } from 'react-router-dom';
//main pages
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
//client pages
import UMain from './pages/UserMain'
import UHome from './pages/ClientSide/UserHome';
import UAbout from './pages/ClientSide/UserAbout';
import UOpenTicket from './pages/ClientSide/UserOpenTickets';
import UClosedTicket from './pages/ClientSide/UserClosedTickets';
import UNewTicket from './pages/ClientSide/UserNewTick';
//it pages
import IMain from './pages/ITMain'
import IHome from './pages/ITSide/ITHome'
import IAbout from './pages/ITSide/ITAbout'
import IOpenTicket from './pages/ITSide/ITOpenTickets'
import IClosedTicket from './pages/ITSide/ITClosedTickets'

import Header from './components/Header';
import Pages from './pages/ForgotPassword';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import PrivateRoute from "./components/PrivateRoute";

//npm i react-router-dom

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/aXRtYWlu" element={<IMain/>}/>
        <Route path="/it/main" element={<IMain/>}/>

        <Route path="/dXNlcm1haW4=" element={<UMain/>}/>
        <Route path="/client/main" element={<UMain/>}/>

        <Route path="/aXRob21l" element={<IHome/>}/>
        <Route path="/it/home" element={<IHome/>}/>

        <Route path="/aXRvcGVudGlja2V0cw==" element={<IOpenTicket/>}/>
        <Route path="/it/open" element={<IOpenTicket/>}/>

        <Route path="/aXRjbG9zZWR0aWNrZXRz" element={<IClosedTicket/>}/>
        <Route path="/it/closed" element={<IClosedTicket/>}/>

        <Route path="/it/about" element={<IAbout/>}/>
        <Route path="/aXRhYm91dA==" element={<IAbout/>}/>

        <Route path="/home" element={<UHome/>}/>
        <Route path="/Y2xpZW50aG9tZQ==" element={<UHome/>}/>

        <Route path="/Y2xpZW50bmV3dGlja2V0" element={<UNewTicket/>}/>
        <Route path="/client/new" element={<UNewTicket/>}/>

        <Route path="/Y2xpZW50b3BlbnRpY2tldA==" element={<UOpenTicket/>}/>
        <Route path="/client/open" element={<UOpenTicket/>}/>

        <Route path="/Y2xpZW50Y2xvc2VkdGlja2V0" element={<UClosedTicket/>}/>
        <Route path="/client/closed" element={<UClosedTicket/>}/>

        <Route path="/Y2xpZW50YWJvdXQ=" element={<UAbout/>}/>
        <Route path="/client/about" element={<UAbout/>}/>
      </Routes>
    </>
  );
}

export default App;
