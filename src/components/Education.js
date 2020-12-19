import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';

import styles from './Education.module.css';

const Education = () => {

    const [educations , setEducations] = React.useState([{
        idx: 'education-0',
        name: 'Higher Education - Kendriya Vidyalaya Raksha Vihar ,Kanpur'
    }]);

    const handleChange = (e, idx) => {
        console.log(idx);
        console.log(educations)
        const newEducation = educations.map((education, id) => {
            if(idx === id){
                education.name = e.target.value
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
            idx: `skill-${noOfEducation}`,
            name: ''
        }
        setEducations([
            ...educations,
            newEducation
        ])
    }

    const handleDelete = (idx) => {
        console.log(idx)
        const newEducations = educations.filter((education, id) => idx !== id)
        console.log(newEducations);
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
                                    <TextField 
                                        name={`education-${idx}`}
                                        value={education.name}
                                        placeholder="Enter Some Education Here.."
                                        onChange={(e) => handleChange(e, idx)}
                                        className={styles.textField}
                                        fullWidth
                                    />
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
