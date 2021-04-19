import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Accordion,AccordionSummary,AccordionDetails,Typography,Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2rem'
  },
  spaceTop:{
    marginTop: '2rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
function Card(props) {
  const {username, Descreptions, delet, Edit} = props
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root} >
     <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{username}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {Descreptions}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={{width:'100%'}} align='right' >
            <Button color='primary' onClick={Edit} >Edit</Button>
            <Button  onClick={delet} color='secondary' >Delete</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </Fragment>
  )
}

export default Card;