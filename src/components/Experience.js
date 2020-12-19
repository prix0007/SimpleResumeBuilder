import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';

import styles from './Experience.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getResume, setExperienceState} from "../redux/resumeSlice";

const Experience = () => {

    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);

    const [experiences , setExperiences] = React.useState([{
        name: 'React UI Developer',
        place: 'Cypherock',
        total: '6 Months'
    }]);

    React.useEffect(() => {
        dispatch(setExperienceState(experiences));
    }, [dispatch, experiences])

    const handleChange = (e, idx) => {
        console.log('I am WOrking', e.target.name)
        const newExperiences = experiences.map((experience, id) => {
            if(idx === id){
                experience = {
                    ...experience,
                    [e.target.name]: e.target.value
                }
            }
            return experience;
        });
        setExperiences([
            ...newExperiences
        ])
    }

    const handleAdd = () => {

        const newExperience = {
            name: '',
            place: '',
            total: ''
        }
        setExperiences([
            ...experiences,
            newExperience
        ])
    }

    const handleDelete = (idx) => {
        const newExperiences = experiences.filter((experience, id) => idx !== id)
        setExperiences([
            ...newExperiences
        ]);
    }

    return (
        <Paper className={styles.experienceRoot}>
            <Grid container className={styles.experienceHeader}>
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                    Experience
                </Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        experiences.map((skill, idx) => {
                            return (
                                <Paper key={`experience-${idx}`} className={styles.experienceWrapper}>
                                    <Grid container>
                                        <TextField
                                            name={'name'}
                                            value={skill.name}
                                            fullWidth
                                            placeholder="Enter Your Role Position"
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                        <TextField
                                            name={'place'}
                                            value={skill.place}
                                            fullWidth
                                            placeholder="Enter the Organization or Company Where you worked"
                                            onChange={(e) => handleChange(e, idx)}
                                            className={styles.textField}
                                            fullWidth
                                        />
                                        <TextField
                                            name={'total'}
                                            value={skill.total}
                                            fullWidth
                                            placeholder="Enter Your total Experience There (e.g. 6 Months, 1 year)"
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

export default Experience
