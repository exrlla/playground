import NavBar from './components/NavBar';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';

import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Link to="/"><img className='logo' src='https://play.nintendo.com/images/PLAY-5075-PBN-Bowser_Logo_v02.e1456275.png' alt='bowser logo' width={200} /></Link>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/one" exact element={<One />} />
        <Route path="/two" exact element={<Two />} />
        <Route path="/three" exact element={<Three />} />
      </Routes>

    </div>
  );
}

