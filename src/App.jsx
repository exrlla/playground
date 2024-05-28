import { BrowserRouter, Routes, Route } from 'react-router-dom';

import House from './components/House';
import Garden from './components/Garden';
import School from './components/School';
import Museum from './components/Museum';
import NavBar from './components/NavBar';

function App() {
  return (
      <div>
        <h1>Map Navigation</h1>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<House />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/school" element={<School />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
