import React from 'react';
import Utils  from '../utils/app-utils';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function CreateDialogView(oProps) { 
    const classes = useStyles();
    const [labelText, setLabelText] = React.useState("");
    const handleOnSubmit = (oEvent)=>{
        let oCurrentDate= new Date();
        let oTask =  {
          id: Utils.generateUUID(),
          title: labelText,
          completed: false,
          createdOn: oCurrentDate,
          deadline: Utils.getRandomGeneratedDate(oCurrentDate), 
      };
      oProps.handleAddTask(oTask);
    }

    const handleLabelChange = (oEvent) => {
      setLabelText(oEvent.target.value);
    };

  return (
    <Dialog
        maxWidth={"md"}
        open={oProps.isOpen}
        onClose={oProps.handleOnClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Create To-do</DialogTitle>
        <DialogContent>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="To-do"
          value={labelText}
          variant="outlined"
          onChange={handleLabelChange}
        />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={oProps.handleOnClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleOnSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default CreateDialogView;
