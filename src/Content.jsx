import { useContext, useEffect } from 'react';
import { ThemeContext } from './App.jsx';

export default function Content() {
    // Consume theme from ThemeContext
    const { theme } = useContext(ThemeContext);
  
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  
    return (
      <div className="content">
        <h1>{theme === 'barbie' ? '💇🏼‍♀️💅🏻💗' : '🕵🏼‍♂️🌇🎥'}</h1>
        <p>
          {theme === 'barbie' ? 'Im a barbie girl, in a barbie world!' : 'Now I am become Death, the destroyer of worlds.'}
        </p>
      </div>
    );
  }