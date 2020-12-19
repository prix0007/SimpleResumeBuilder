import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Typography from "@material-ui/core/Typography";

import styles from './SocialLink.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setSocialMediaState ,getResume} from "../redux/resumeSlice";



const SocialLink = () => {

    const dispatch = useDispatch();

    const globalResume = useSelector(getResume);

    const [socialLink, setSocialLink] = React.useState({
        linkedIn: '',
        github: '',
        gitlab: '',
    });

    React.useEffect(() => {
        dispatch(setSocialMediaState(socialLink))
    }, [dispatch, socialLink])

    const handleChange = (e) => {
        setSocialLink({
            ...socialLink,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Paper style={{margin: '1rem 0rem', padding: '1rem'}}>
            <Grid container >
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                   Social Contacts
                </Typography>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} className={styles.fieldWrapper}>
                    {
                        Object.keys(socialLink).map((item ) => {
                            return (
                                <TextField
                                    key={item}
                                    name={item}
                                    label={item}
                                    value={socialLink[item]}
                                    placeholder={`Enter your ${item}`}
                                    onChange={handleChange}
                                    className={styles.textField}
                                />
                            )
                        })
                    }
                </Grid>
                <Grid item sm={1} />
            </Grid>
        </Paper>
    )
}

export default SocialLink;