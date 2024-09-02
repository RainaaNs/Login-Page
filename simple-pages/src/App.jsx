import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error from './pages/Error';


const App = () => {
  return (
    <Router>
      <nav className='bg-transparent fixed w-full'>
        <ul className="flex space-x-4 py-3 pl-5 font-serif">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
