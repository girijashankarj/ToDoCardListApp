import {sortBy, filter} from 'lodash';
import uuidv1 from 'uuid/v1';
export default (function () {

    const  _getArrangedTaskListAccordingToFilters = (sSortBy, sTabView, aTaskList)=>{
        let sSortByKey = sSortBy === "Deadline" ? "deadline": "createdOn";
        //sortBy 
        aTaskList = sortBy(aTaskList, sSortByKey);
        //tabView
        aTaskList = filter(aTaskList, (oTask) => sTabView === "Pending" ? !oTask.completed : oTask.completed);
        return aTaskList;
    }

    const _getFormattedDate = (sDate) => {
        let oDate = new Date(sDate);
        let sMonth = oDate.getUTCMonth() + 1;
        let sDay = oDate.getUTCDate();
        let sYear = oDate.getUTCFullYear();
        return sMonth + "/" + sDay + "/" + sYear;
    }

    const _getRandomGeneratedDate = (oStartDate) => {
        let oEndDate = new Date(2099, 12, 31);
        return new Date(oStartDate.getTime() + Math.random() * (oEndDate.getTime() - oStartDate.getTime()));
    }

    const _generateUUID = () => {
        return uuidv1(); 
    }

	return {
        getArrangedTaskListAccordingToFilters(sSortBy, sTabView, aTaskList){
           return _getArrangedTaskListAccordingToFilters(sSortBy, sTabView, aTaskList)
        },
        getFormattedDate(sDate){
           return _getFormattedDate(sDate)
        },
        getRandomGeneratedDate(oStartDate){
           return _getRandomGeneratedDate(oStartDate)
        },
        generateUUID(){
            return _generateUUID();
        },
    };
})();