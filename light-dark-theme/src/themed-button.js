
import React, { useContext } from 'react';
import {ThemeContext} from './theme-context';

const ThemedButton = props => {
  const { theme, toggleTheme } = useContext( ThemeContext )

  return (
    <button
      onClick={toggleTheme}
      {...props}
      style={{backgroundColor: theme.background}}>
        {props.children}: {theme.name}</button>
  );
}

export default ThemedButton;
