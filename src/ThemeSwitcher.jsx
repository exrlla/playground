import { useContext } from 'react';
import { ThemeContext } from './App.jsx';

export default function ThemeSwitcher() {
    // Consume theme and toggleTheme from ThemeContext
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div className="theme-switcher">
        <button onClick={toggleTheme}>
          Switch to {theme === 'barbie' ? 'Oppenheimer' : 'Barbie'} Theme
        </button>
      </div>
    );
  }