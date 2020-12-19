import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './App.module.css';

import Resume from './components/Resume';

function App() {
  return (
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
  );
}

export default App;
