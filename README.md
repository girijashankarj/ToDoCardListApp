This project is created using [Create React App](https://github.com/facebook/create-react-app) boiler plate and the information about the configuration of application is same as mentioned in [Create React App](https://github.com/facebook/create-react-app) documentation.

## Functionalities required in app
1. To create a “To-Do List” in Card view.
2. To-do will have information such as Deadline, Creation date and Completion status.
3. To-do can be sort on based of Deadline and Creation date.
4. To-do can be showned in tab view on basis of Completion.

### `Library Used`
1. Material UI (component used Modal, Card, Button, Checkbox)
2. Lodash (can be ignored)

### `Component Heirarchy`
1. `ToDoController` (Parent Component which consist of states - 1.Sort-by 2.Tab View 3.Task List)
   1.1. `HeaderView` (Uncontrolled which consist of state- 1.Create Dialog Open)
      1.1.1. `CreateDialogView` (Dialog Component which will be accept the New to-do information)
   1.2. `CardListView` (Controlled Component which will be displaying To-do information on card)
   
### `Improvements can be made`
1. Code can be structured to Flux or Redux.
2. Constant key can be introduced in code.
3. Styling can be constructed with standardized module for more interactive design.
