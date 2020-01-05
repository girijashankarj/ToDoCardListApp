import React, {useState} from 'react';
import CreateDialogView from './create-dilaog-view';
import { Button } from '@material-ui/core';

function getCreateView(bshowCreateDialog, fHandleAddTask, fHandleOnButtonClick) {
    return (
        <CreateDialogView 
            showCreateDialog={bshowCreateDialog} 
            handleAddTask={fHandleAddTask}
            handleOnClose={fHandleOnButtonClick}/>
    );
}

function getCreateButtonView(fHandleOnButtonClick) {
    return (
        <Button 
        className="appButton" 
        id="createButton" 
        variant="contained" 
        color="primary" 
        onClick={fHandleOnButtonClick}>
        Create
        </Button>
    );
}

function getFilterButtonsView({sortBy:sSortBy, tabView: sTabView}) {
}

function HeaderView(oProps) {
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const handleOnButtonClick = (oEvent, bToggleStatus=false) => {
        oEvent.preventDefault();
        switch(oEvent.target.id){
           case "createButton":
            setShowCreateDialog(!!showCreateDialog);
            break;
        }
    }
  return (
    <div className="headerView">
        {getCreateView(showCreateDialog, oProps.handleAddTask, handleOnButtonClick)}
        {getCreateButtonView(handleOnButtonClick)}
        {getFilterButtonsView(oProps, handleOnButtonClick)}
    </div>
  );
}

export default HeaderView;
