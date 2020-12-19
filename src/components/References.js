import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';

import styles from './References.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    setReferencesState,
    getResume,
} from "../redux/resumeSlice";

const References = () => {

    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);

    const [references , setReferences] = React.useState([...globalResume.references]);

    const handleChange = (e, idx) => {
        const newReferences = references.map((reference, id) => {
            if(idx === id){
                reference = {
                    ...reference,
                    [e.target.name]: e.target.value
                }
            } 
            return reference;
        });
        setReferences([
            ...newReferences
        ])
    }

    const handleAdd = () => {
        const newReference = {
            name: '',
            contact: ''
        }
        setReferences([
            ...references,
            newReference
        ])
    }

    const handleDelete = (idx) => {

        const newReferences = references.filter((reference, id) => idx !== id)

        setReferences([
            ...newReferences
        ]);
    }

    React.useEffect(() => {
        dispatch(setReferencesState(references))
    }, [dispatch, references])

    return (
        <Paper className={styles.referencesRoot}>
            <Grid container className={styles.referencesHeader}>
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                    References
                </Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        references.map((reference, idx) => {
                            return (
                                <Paper key={`skill-${idx}`} className={styles.referencesWrapper}>
                                    <Grid container>
                                        <TextField
                                            name={'name'}
                                            value={reference.name}
                                            placeholder="Enter Name of your Reference."
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                        <TextField
                                            name={'contact'}
                                            value={reference.contact}
                                            placeholder="Enter Contact For the reference ."
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                    </Grid>
                                    <IconButton onClick={(e) => handleDelete(idx)}>
                                        <DeleteIcon color="error"/>
                                    </IconButton>
                                </Paper>
                            )
                        })
                    }
                </Grid>
                <Grid item sm={1} />
            </Grid>
           
        </Paper>
    )
}

export default References;
