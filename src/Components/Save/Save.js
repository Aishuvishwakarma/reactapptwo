import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width : '100%',
      marginTop:'2rem'
    },
  }));


function Save(props) {
  const { GoHome ,id , username , Descreptions ,Update,disable,Onsave} = props
    const classes = useStyles();
    return (
        <div>
            <TextField
            className={classes.root}
            label="User Id"
            name="id"
            value={id}
            onChange={Update}
            disabled={disable}
            />
            <TextField
            className={classes.root}
            label="Username"
            name="username"
            value={username}
            onChange={Update}
            />
        <TextField
          className={classes.root}
          label="User's Descreption"
          name="Descreptions"
          value={Descreptions}
          multiline
          rows={3}
          onChange={Update}
           />
          <Typography className={classes.root} >
          <Button onClick={Onsave}  variant='contained' color='primary' >save</Button>
          <Button onClick={GoHome} style={{marginLeft:'1rem'}} variant='contained' color='secondary'  >Go Home</Button>
          </Typography>
        </div>
    )
}

export default Save;
