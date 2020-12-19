import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ChevronRightRounded';

import Skills from './Skills';
import References from './References';
import Education from './Education';

import styles from './Resume.module.css';

const Resume = () => {

    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };    

    return (
        <Grid container className={styles.resumeRoot}>
            <Grid item sm={1} />
            <Grid item sm={10} >
                <TextField
                    id="standard-multiline-flexible"
                    label="Name *"
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Your Name Here"
                    className={styles.textField}
                />
                <TextField
                    id="standard-multiline-static"
                    label="About Yourself *"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Write Something About Yourself"
                    variant="outlined"
                    className={styles.textField}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Location"
                    fullWidth
                    placeholder="Where Are you currently ?"
                    variant="outlined"
                    className={styles.textField}
                />
                <Skills />
                <References />
                <Education />
            </Grid>
            <Grid item sm={1} />
           
            <Button variant={'contained'} color="primary">
                Next <NextIcon />
            </Button>
        </Grid>
    )
}

export default Resume;