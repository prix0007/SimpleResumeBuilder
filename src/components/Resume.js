import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NextIcon from '@material-ui/icons/ChevronRightRounded';

import { Link } from 'react-router-dom';

import {
    isString,
    isValidNumber,
    isValidString
} from "../utils/verifications";

import Skills from './Skills';
import References from './References';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import SocialLinks from './SocialLinks';

import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const [resume, setResume] = React.useState({
        name: '',
        about: '',
        location: '',
        errors: {
            name: '',
            about: '',
            location: ''
        }
    });

    const handleChange = (event) => {
        setResume({
            ...resume,
            [event.target.name]: event.target.value
        });
    };

    const handleChecks = () => {
        if(!isString(resume.name) || !isValidString(resume.name)){
            setResume({
                ...resume,
                errors: {
                    ...resume.errors,
                    name: 'Please Enter a Valid name'
                }
            });
            return
        } else if(!isString(resume.about) || !isValidString(resume.about)){
            setResume({
                ...resume,
                errors: {
                    ...resume.errors,
                    name: '',
                    about: 'Please Enter Something About YourSelf'
                }
            });
            return
        } else if(!isString(resume.location) || !isValidString(resume.location)){
            setResume({
                ...resume,
                errors: {
                    ...resume.errors,
                    about: '',
                    location: 'Please Enter a Valid name'
                }
            });
            return
        }
        else{
            history.push('/final');
        }

    }

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
                    error={resume.errors.name}
                    helperText={resume.errors.name}
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
                    error={resume.errors.about}
                    helperText={resume.errors.about}
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
                    error={resume.errors.location}
                    helperText={resume.errors.location}
                />
                <Skills />
                <References />
                <Education />
                <Experience />
                <Contact />
                <SocialLinks />

                <Button variant={'contained'} color="primary" fullWidth style={{padding :'1rem'}} onClick={handleChecks}>
                    Next <NextIcon />
                </Button>

            </Grid>
            <Grid item sm={1} />
           

        </Grid>
    )
}

export default Resume;