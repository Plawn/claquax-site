import React from 'react';
import logo from './logo.svg';
import './App.css';
import { debiles } from './lesDebiles';
import { Debile } from './Debile';
import { Typography, Box } from '@mui/material';
import Spacer from './common/Spacer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Box
        component="img"
        style={{
          WebkitFilter: "drop-shadow(0px 0px 17px rgba(0,0,0,0.6))",
          filter: "drop-shadow(0px 0px 11px rgba(0,0,0,0.6))",
        }}
        sx={{
          width: 7000,
          maxWidth: { xs: 7000, md: 550 },
        }}
        src="/Claquax-Order.png"
        alt="claquax logo"
      />
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
