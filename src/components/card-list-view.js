import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card , CardContent , Typography, Checkbox} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
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

function getFormattedDate(oDate) {
    let sMonth = oDate.getUTCMonth() + 1;
    let sDay = oDate.getUTCDate();
    let sYear = oDate.getUTCFullYear();
    return sMonth + "/" + sDay + "/" + sYear;
}

function getCardsView(aTaskList) { 
    if(aTaskList.isEmpty){
        return;
    }
    
    let aCardListView = aTaskList.map((oTask) => { 
        const classes = useStyles();
        return (
        <Card 
            classes={classes.card}
            raised={oTask.completed}>
            <CardContent>
                <Typography
                    className={classes.title}
                    variant={"h6"}
                    color="textSecondary"
                    gutterBottom>
                    <div className="taskTitle">{oTask.title}</div>
                    <div className="taskCreatedOn">Created On : {getFormattedDate(oTask.createdOn)}</div>                    
                    <div className="taskDeadline">Deadline : {getFormattedDate(oTask.deadline)}</div>  
                    <div className="taskDeadline">Completed :                    
                    <Checkbox
                        checked={oTask.completed}
                        onChange={{}}
                        value="Completed"
                        color="primary"/>
                    </div>
                </Typography>
            </CardContent>
        </Card>);
    });

    return aCardListView;      
}

function CardListView(oProps) {
  return (
    <div className="cardListView">
        {getCardsView(oProps.taskList)}
    </div>
  );
}

export default CardListView;
