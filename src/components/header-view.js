import React from 'react';
import {map} from 'lodash';
import CreateDialogView from './create-dilaog-view';
import { Button } from '@material-ui/core';
import FilterButtonData from '../constants/filter-button-model'
import Utils  from '../utils/app-utils';
import FilterButtonView from './filter-button-view';

function getFilterButton (oProps) {
    let aFilterButtonData = new FilterButtonData(oProps); 
    return map(aFilterButtonData, (oFilterButton) => {
        return (
        <FilterButtonView 
            handleFilterAction={oProps.handleFilterAction} 
            {...oFilterButton} /> 
    )});
}

function HeaderView(oProps) {    
  return (
    <div className="headerView">
        {oProps.isDialogOpen ? 
            <CreateDialogView 
                key={Utils.generateUUID()}
                isOpen={oProps.isDialogOpen} 
                handleAddTask={oProps.handleAddTask}
                handleOnClose={oProps.handleDialogStatus}/> :  null}
        <Button 
            className="appButton" 
            id="createButton" 
            variant="contained" 
            color="primary" 
            onClick={oProps.handleDialogStatus}>
            Create
        </Button>
        {getFilterButton(oProps)}
    </div>
  );
}

export default HeaderView;
