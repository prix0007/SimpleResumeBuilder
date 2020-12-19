import React from 'react';

import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {getResume} from "../redux/resumeSlice";
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { json2csv } from 'json-2-csv';
import { JsonToTable } from "react-json-to-table";

import styles from './Final.module.css';
import {Button} from "@material-ui/core";

String.prototype.toPascalCase = function() {
    return this
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
            new RegExp(/\s+(.)(\w+)/, 'g'),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, 'g'), '')
        .replace(new RegExp(/\w/), s => s.toUpperCase());
};

const parseData = (data) => {
    switch(typeof data){
        case 'string' : return data;
        case 'object': return Array.isArray(data) ? data.map((item, idx) => {
            return (<Grid container  key={`${item}-${idx}`}>
                <Grid item sm={1}><FiberManualRecordIcon /></Grid>
                <Grid item sm={11}>{parseData(item)}</Grid>
            </Grid>)
        }) : Object.keys(data).map((item, idx) => {
            return (
                data[item].length > 0 && <span className={styles.item} key={`${item}-${idx}`}>
                    <span>{item.toPascalCase()} : </span>
                    <span>{ `- ${data[item]}`}</span>
                </span>
            )
        })
        default: return JSON.stringify(data);
    }
}

const Final = () => {

    const dispatch = useDispatch();
    const globalResume = useSelector(getResume);

    const handleDownload = () =>{
        let json2csvCallback = function (err, csv) {
            if (err) throw err;
            console.log(csv);
            var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

            if (navigator.msSaveBlob) { // IE 10+
                navigator.msSaveBlob(blob, 'new.csv');
            } else {
                var link = document.createElement("a");
                if (link.download !== undefined) { // feature detection
                    // Browsers that support HTML5 download attribute
                    var url = URL.createObjectURL(blob);
                    link.setAttribute("href", url);
                    link.setAttribute("download", 'new.csv');
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }
        };

        json2csv(globalResume, json2csvCallback);
    }


    return (
        <Grid container style={{padding: '0rem 0rem 3rem'}}>
            <Grid item sm={2} />
            <Grid item sm={8}>
                <Typography variant={'h4'} style={{margin :'2rem', textAlign: 'center'}} >
                    Your Resume
                </Typography>
                {
                    Object.keys(globalResume).map((key) => {
                        return (
                            key !== 'image' &&  <Paper className={styles.wrapper} key={key}>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Typography>
                                            { key[0].toUpperCase() }
                                            { key.slice(1).toLowerCase() }
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Typography className={styles.item}>
                                            {
                                              parseData(globalResume[key])
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )
                    })
                }
            </Grid>
            <Grid item sm={2} />
            <Grid item sm={2} />
            <Grid item sm={8} >
                <Typography variant={'h4'} style={{margin :'2rem', textAlign: 'center'}} >
                   In Table Format
                </Typography>
                <JsonToTable json={globalResume} />
                <Button onClick={handleDownload} color={"primary"} variant={'contained'} className={styles.download} fullWidth>
                    Download
                </Button>
            </Grid>
            <Grid item sm={2} />

        </Grid>
    )
}

export default Final;