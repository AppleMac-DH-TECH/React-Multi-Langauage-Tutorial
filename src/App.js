import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import LanguageSelector from './component/containers/LanguageSelector';
import { LanguageProvider } from './component/containers/Language';
import Explore from './component/Explore';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>
        <Explore />
      </div>
    </LanguageProvider>
  );
 }

export default App;
