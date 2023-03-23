import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/main';
import SignUp from './components/signup';
import Login from './components/login';
import UMain from './components/userMain';
import UHome from './components/userHome';
import UAbout from './components/userAbout';
import UOpenTicket from './components/userOpenTickets';
import UClosedTicket from './components/userClosedTickets';
import UNewTicket from './components/userNewTickets';
import IMain from './components/adminMain';
import IHome from './components/adminHome';
import IAbout from './components/adminAbout';
import IOpenTicket from './components/adminOpenTickets';
import IClosedTicket from './components/adminClosedTickets';
import NotFound from './components/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

      <Route path="/admin" element={<IMain/>}/>
      <Route path="/admin/home" element={<IHome/>}/>
      <Route path="/admin/about" element={<IAbout/>}/>
      <Route path="/admin/ticket/open" element={<IOpenTicket/>}/>
      <Route path="/admin/ticket/closed" element={<IClosedTicket/>}/>

      <Route path="/user" element={<UMain/>}/>
      <Route path="/user/home" element={<UHome/>}/>
      <Route path="/user/about" element={<UAbout/>}/>
      <Route path="/user/ticket/new" element={<UNewTicket/>}/>
      <Route path="/user/ticket/open" element={<UOpenTicket/>}/>
      <Route path="/user/ticket/closed"element={<UClosedTicket/>}/>

      <Route path="/not-found" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
