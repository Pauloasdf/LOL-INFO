import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { summonerByNameExample } from './API/SummonerData'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Lupa from '@material-ui/icons/SearchRounded'

import './App.css';
import { Typography, Grid } from '@material-ui/core';

function App() {

  const [level, setLevel] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <form noValidate autoComplete="off">
          <TextField
            InputProps={{
              className: "field"
            }} id="filled-basic"
            label="Nome do Invocador"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            className="button"
            variant="contained"
            color="primary"
            href="#contained-buttons"
            onClick={() => summonerByNameExample(name).then((value) => setLevel(value.summonerLevel))}
          >
            <Lupa fontSize={"large"} />
          </Button>
          <Grid>
            <Typography variant="h4" component="h2">
              <br></br>
              {level && <span>Nível {level}</span>}
            </Typography>
          </Grid>

        </form>
      </header>
    </div>
  );
}

export default App;
