import { useState } from 'react';
import HomePage from './components/Home';
import AboutPage from './components/About';
import ContactPage from './components/Contact';

const App = () => {
  const [route, setRoute] = useState('home');

  const renderPage = function() {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <a href="#home"><li onClick={() => setRoute('home')}>Home</li></a>
            <a href="#about"><li onClick={() => setRoute('about')}>About</li></a>
            <a href="#contact"><li onClick={() => setRoute('contact')}>Contact</li></a>
          </ul>
        </nav>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
