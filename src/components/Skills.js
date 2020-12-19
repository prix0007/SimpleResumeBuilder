import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';

import styles from './Skills.module.css';

const Skills = () => {

    const [skills , setSkills] = React.useState([{
        idx: 'skill-0',
        name: 'Communication'
    }]);

    const handleChange = (e, idx) => {
        console.log(idx);
        console.log(skills)
        const newSkills = skills.map((skill, id) => {
            if(idx === id){
                skill.name = e.target.value
            } 
            return skill;
        });
        setSkills([
            ...newSkills
        ])
    }   

    const handleAdd = () => {
        const noOfSkills = skills.length
        const newSkill = {
            idx: `skill-${noOfSkills}`,
            name: ''
        }
        setSkills([
            ...skills,
            newSkill
        ])
    }

    const handleDelete = (idx) => {
        console.log(idx)
        const newSkills = skills.filter((skill, id) => idx !== id)
        console.log(newSkills);
        setSkills([
            ...newSkills
        ]);
    }

    return (
        <Paper className={styles.skillsRoot}>
            <Grid container className={styles.skillsHeader}>
                <Typography variant="h6" style={{marginLeft: '1rem'}}>
                    Skills
                </Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddIcon />
                </IconButton>
            </Grid>
            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={10} style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        skills.map((skill, idx) => {
                            return (
                                <Paper key={`skill-${idx}`} className={styles.skillWrapper}>
                                    <TextField 
                                        name={`skill-${idx}`}
                                        value={skill.name}
                                        placeholder="Enter Some Skill Here.."
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

export default Skills
