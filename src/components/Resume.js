import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ChevronRightRounded';

import { Link } from 'react-router-dom';

import Skills from './Skills';
import References from './References';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import SocialLinks from './SocialLinks';

import styles from './Resume.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    setNameState,
    setAboutState,
    setLocationState,
    getResume,
} from "../redux/resumeSlice";

const Resume = () => {

    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);


    const [resume, setResume] = React.useState({
        name: '',
        about: '',
        location: ''
    });
    const handleChange = (event) => {
        setResume({
            ...resume,
            [event.target.name]: event.target.value
        });
    };    

    return (
        <Grid container className={styles.resumeRoot}>
            <Grid item sm={1} />
            <Grid item sm={10} >
                <TextField
                    id="standard-multiline-flexible"
                    label="Name *"
                    name={'name'}
                    fullWidth
                    value={resume.name}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Your Name Here"
                    className={styles.textField}
                    onBlur={() => {
                        dispatch(setNameState(resume.name))
                    }}
                />
                <TextField
                    id="standard-multiline-static"
                    label="About Yourself *"
                    name={"about"}
                    fullWidth
                    value={resume.about}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    placeholder="Write Something About Yourself"
                    variant="outlined"
                    className={styles.textField}
                    onBlur={() => {
                        dispatch(setAboutState(resume.about))
                    }}
                />
                <TextField
                    id="standard-multiline-static"
                    label="Location"
                    name={"location"}
                    fullWidth
                    placeholder="Where Are you currently ?"
                    variant="outlined"
                    className={styles.textField}
                    value={resume.location}
                    onChange={handleChange}
                    onBlur={() => {
                        dispatch(setLocationState(resume.location))
                    }}
                />
                <Skills />
                <References />
                <Education />
                <Experience />
                <Contact />
                <SocialLinks />
                <Link to={'/final'}>
                    <Button variant={'contained'} color="primary" fullWidth style={{padding :'1rem'}}>
                        Next <NextIcon />
                    </Button>
                </Link>
            </Grid>
            <Grid item sm={1} />
           

        </Grid>
    )
}

export default Resume;