import React from 'react';
import {isEmpty , map} from 'lodash';
import CardView from './card-view'

function CardListView(oProps) {
  return (
    <div className="cardListView">
        {isEmpty(oProps.taskList) ? null : 
        map(oProps.taskList,(oTask) => { 
        return (
        <CardView {...oTask} 
        handleTaskCompletionToggle={oProps.handleTaskCompletionToggle}/>)
        })}
    </div>
  );
}

export default CardListView;
