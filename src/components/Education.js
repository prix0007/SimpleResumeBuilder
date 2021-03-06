import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';

import styles from './Education.module.css';

import { useSelector, useDispatch } from 'react-redux';
import {
    setEducationState,
    getResume, setReferencesState,
} from "../redux/resumeSlice";

const Education = () => {

    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);

    const [educations , setEducations] = React.useState([{
        name: 'Higher Education',
        organization: 'Kendriya Vidyalaya, Raksha Vihar',
        place: 'Kanpur'
    }]);

    React.useEffect(() => {
        dispatch(setEducationState(educations));
    }, [dispatch, educations]);

    const handleChange = (e, idx) => {

        const newEducation = educations.map((education, id) => {
            if(idx === id){
                education = {
                    ...education,
                    [e.target.name]: e.target.value
                }
            } 
            return education;
        });
        setEducations([
            ...newEducation
        ])
    }   

    const handleAdd = () => {
        const noOfEducation = educations.length
        const newEducation = {
            name: '',
            organization: '',
            place: ''
        }
        setEducations([
            ...educations,
            newEducation
        ])
    }

    const handleDelete = (idx) => {

        const newEducations = educations.filter((education, id) => idx !== id)

        setEducations([
            ...newEducations
        ]);
    }

    return (
        <Paper className={styles.educationRoot}>
            <Grid container className={styles.educationHeader}>
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                    Education
                </Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        educations.map((education, idx) => {
                            return (
                                <Paper key={`education-${idx}`} className={styles.educationWrapper}>
                                    <Grid container>
                                        <TextField
                                            name={'name'}
                                            value={education.name}
                                            placeholder="Enter name of Education"
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                        <TextField
                                            name={'organization'}
                                            value={education.organization}
                                            placeholder="Enter The Organization Name.."
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                        <TextField
                                            name={'place'}
                                            value={education.place}
                                            placeholder="Enter the Place of Organization"
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

export default Education
