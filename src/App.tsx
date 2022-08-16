import React from 'react';
import logo from './logo.svg';
import './App.css';
import { debiles } from './lesDebiles';
import { Debile } from './Debile';
import { Typography } from '@mui/material';
import Spacer from './common/Spacer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h1' className="HeaderTypo" >
          Claquax Order
        </Typography>
      </header>
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {debiles.map(i => (
          <>
            <Debile debile={i} />
            <Spacer variant="vertical" size="1em" />
          </>
        ))}
      </main>
    </div>
  );
}

export default App;
