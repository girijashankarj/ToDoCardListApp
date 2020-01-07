import React, { useState , useEffect} from 'react';
import {find} from 'lodash';
import HeaderView from './header-view'
import CardListView from './card-list-view';
import Utils  from '../utils/app-utils'

function ToDoController() {
  const [sortBy, setSortBy] = useState("Create Date");
  const [tabView, setTabView] = useState("Pending");
  const [taskList, setTaskList] = useState([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {  
     localStorage.setItem("taskList", JSON.stringify([]));
    return () => { localStorage.removeItem("taskList")};
  },[]);

  const handleAddTask=(oTask)=>{
   let aStoredTaskList = JSON.parse(localStorage.getItem("taskList"));
   aStoredTaskList.push(oTask);
   localStorage.setItem("taskList", JSON.stringify(aStoredTaskList));
   setTaskList(aStoredTaskList);
   setShowCreateDialog(false);
 }

 const handleTaskCompletionToggle = (sTaskId) => {
  let aStoredTaskList = JSON.parse(localStorage.getItem("taskList"));
  let oTask = find(aStoredTaskList, {id : sTaskId});
  oTask.completed = !oTask.completed;
  localStorage.setItem("taskList", JSON.stringify(aStoredTaskList));
  setTaskList(aStoredTaskList);
}

const handleToggleDialogStatus = () => {
  setShowCreateDialog(!showCreateDialog);
}

const handleFilterAction = ({id : sFilterId, value: sFilterAction}) => {
  if(sFilterId === "sortBy") {
    setSortBy(sFilterAction);
  } else if(sFilterId === "tabView") {
    setTabView(sFilterAction);
  }
}
 
let aArrangedTaskList = Utils.getArrangedTaskListAccordingToFilters(sortBy, tabView, taskList);

  return (
    <div className="ToDoController">
      <HeaderView 
        sortBy={sortBy} 
        tabView={tabView}
        isDialogOpen={showCreateDialog}
        handleAddTask={handleAddTask}
        handleFilterAction={handleFilterAction}
        handleDialogStatus={handleToggleDialogStatus}/>
      <CardListView
        taskList={aArrangedTaskList}
        handleTaskCompletionToggle={handleTaskCompletionToggle}/>
    </div>
  );
}

export default ToDoController;
