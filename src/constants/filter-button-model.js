export default function (oConfig) { 
    return [
        {
            id : "sortBy",
            label : "Sort By",
            value: oConfig.sortBy,
            options : [ "Deadline" , "Create Date"]
        },
        {
            id : "tabView",
            label : "Tab View",
            value: oConfig.tabView,
            options : ["Pending","Completed"]
        }
    ]
}