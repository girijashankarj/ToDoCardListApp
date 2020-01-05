import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoController from './components/to-do-controller';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ToDoController />, document.getElementById('root'));

serviceWorker.unregister();
