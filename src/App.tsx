import React from 'react';
import './App.css';
import AppBar from './components/layout/AppBar';
import Card from './components/layout/Card';
const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AppBar/>
      <Card/>
    </div>
  );
}

export default App;
