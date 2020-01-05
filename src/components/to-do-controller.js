import React, { useState } from 'react';
import _ from 'lodash';
import HeaderView from './header-view'
import CardListView from './card-list-view';
import ToDoMockData from '../constants/to-do-mock-data'

function getArrangedTaskListAccordingToFilters (sSortBy, sTabView, aTaskList){
  _.sortBy(aTaskList, [sSortBy]);
  aTaskList = _.filter(aTaskList, (oTask) => sTabView === "pending" ? !oTask.completed : oTask.completed);
  return aTaskList;
}

function ToDoController() {
  
const [sortBy, setSortBy] = useState("deadline");
const [tabView, setTabView] = useState("pending");
const [taskList, setTaskList] = useState(ToDoMockData);

 const handleAddTask=(oTask)=>{
   let aTaskList = taskList;
   aTaskList.push(oTask);
   setTaskList(aTaskList);
 }

 let aArrangedTaskList = getArrangedTaskListAccordingToFilters(sortBy, tabView, taskList);
 
  return (
    <div className="ToDoController">
      <HeaderView 
        sortBy={sortBy} 
        tabView={tabView}
        handleAddTask={handleAddTask}/>
      <CardListView 
        taskList={aArrangedTaskList}/>
    </div>
  );
}

export default ToDoController;
