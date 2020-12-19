import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './App.module.css';

import Resume from './components/Resume';
import Final from './components/Final';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/final'}>
                  <Final />
              </Route>
              <Route exact path={'/'}>
                  <Grid container className={styles.root}>
                      <Typography variant={'h3'} gutterBottom>
                          Resume Builder
                      </Typography>
                      <Grid container>
                          <Grid item sm={1} />
                          <Grid item sm={10}>
                              <Resume />
                          </Grid>
                          <Grid item sm={1} />
                      </Grid>
                  </Grid>
              </Route>

          </Switch>
      </Router>
  );
}

export default App;
