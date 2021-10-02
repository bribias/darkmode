import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CharacterProvider from '../../hooks/CharacterProvider';
import { useTheme, useToggleTheme } from '../../hooks/ThemeProvider';
import CharacterDetail from '../characters/CharacterDetail';
import ListOfCharacters from '../characters/ListOfCharacters';

const themes = {
  light: {
    foreground: '#ffffff',
    background: '#dddddd'
  },
  dark: {
    foreground: '#000000',
    background: '#494959'
  }
};


export default function App() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <CharacterProvider>
      <div data-testid="themeDiv" style={{ backgroundColor: themes[theme].background, color: themes[theme].foreground }}>
        <BrowserRouter>
          <header>
            <nav>
              <Link to="/">H O M E</Link>
              <button aria-label="theme-toggle" onClick={() => toggleTheme()}>CHANGE YA VIBE</button>
            </nav>
          </header>
          <Switch>
            <Route path='/:id'>
              <CharacterDetail />
            </Route>
            <Route path='/'>
              <ListOfCharacters />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </CharacterProvider>
  );
};
      
