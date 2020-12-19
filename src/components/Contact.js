import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddCircleOutline";

import styles from './Contact.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getResume, setContactState} from "../redux/resumeSlice";
import {isString, isValidString} from "../utils/verifications";

const getLabel = (field) => {
    switch (field){
        case 'email': return 'Email *'
        case 'secondaryEmail': return 'Secondary Email';
        case 'phoneno': return 'Phone Number *';
        default: return "Error";
    }
}

const Contact = () => {


    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);


    const [contact, setContact] = React.useState({
        email: 'princanurag07@gmail.com',
        secondaryEmail: '',
        phoneno: '9151514101',
    });

    React.useEffect(() => {
        dispatch(setContactState(contact))
    }, [dispatch, contact])

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Paper style={{margin: '1rem 0rem', padding: '1rem'}}>
            <Grid container >
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                    Contact Info
                </Typography>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} className={styles.fieldWrapper}>
                    {
                        Object.keys(contact).map((item ) => {
                            return (
                                <TextField
                                    key={item}
                                    name={item}
                                    label={getLabel(item)}
                                    value={contact[item]}
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

export default Contact;