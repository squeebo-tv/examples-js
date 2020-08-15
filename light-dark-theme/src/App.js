
import React, { useState } from 'react';

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';


const UserContext = React.createContext( 'Guest' );

function Main(){
  return (
    <main>
    <h1>Hello World</h1>
    <Nav />
  </main>
  )
}

function Nav(){
  return (
    <ThemeContext.Consumer>
      { ({ theme }) => (
        <UserContext.Consumer>
          { user => (
            <nav style={theme}>
              User: {user}<br />
              <a href="#">Home</a><br />
              <a href="#">About</a><br />
              <a href="#">Help</a><br />
            </nav>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

function Page( props ){
  return (
    <div id="page" {...props} />
  )
}

function Section( props ){
  return (
    <div id="section" {...props} />
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton onClick={props.changeTheme}>
        Change Theme (Inside)
      </ThemedButton><br />
      <button onClick={() => props.onLogin( 'Chris' )}>Log In</button>
    </div>
  );
}


const App = () => {
  const [ theme, setTheme ] = useState( themes.light )
  const [ user,  setUser ]  = useState( 'Guest' )

  const toggleTheme = () => {
    setTheme( theme === themes.dark
      ? themes.light
      : themes.dark,
    );
  };

  return (
    <Page>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <UserContext.Provider value={user}>
          <Toolbar changeTheme={toggleTheme} onLogin={ user => setUser( user )} /><br />
          <Main />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Page>
  );
}

export default App;
