import React from 'react';
import Utils  from '../utils/app-utils';
import { makeStyles } from '@material-ui/core/styles';
import { Card , CardContent , Typography, Checkbox, CardActions} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 200,
      maxWidth: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function CardView(oProps) {
  const classes = useStyles();
  const handleValueChange = id => event => {
    oProps.handleTaskCompletionToggle(id);
  };
  return (
        <Card className={classes.card} variant="outlined" raised={!oProps.completed}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {oProps.title}
                </Typography>
                <Typography variant="body2" component="p">
                    <span className="taskInfo">Created On : {Utils.getFormattedDate(oProps.createdOn)}</span>                    
                    <span className="taskInfo">Deadline : {Utils.getFormattedDate(oProps.deadline)}</span>    
                </Typography>
                </CardContent>
            <CardActions>
                <span className="taskInfo">Completed :                    
                    <Checkbox
                        checked={oProps.completed}
                        onChange={handleValueChange(oProps.id)}
                        value="Completed"
                        color="primary"/>
                </span>
            </CardActions>
</Card>)
}

export default CardView;
