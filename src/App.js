import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SingleNews from './components/SingleNews';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <Link to="/Main">Main</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/SingleNews/:id">SingleNews</Link>
          <Link to="/Login">Login</Link>
        </nav>

        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/SingleNews/:id" element={<SingleNews />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
