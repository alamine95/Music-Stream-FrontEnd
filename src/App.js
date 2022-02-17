import React from 'react';
import './App.scss';
import Nav from './components/nav';
import Main from './components/Main';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControls">musicControls</div>
    </div>
  );
}

export default App;
