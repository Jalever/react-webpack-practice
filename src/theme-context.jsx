import React from 'react';

export const themes = {
  light: {
    foreground: '#00FFFF',
    background: '#DCDCDC',
  },
  dark: {
    foreground: '#808080',
    background: '#B0C4DE',
  },
};

export const ThemeContext = React.createContext(themes.dark);
