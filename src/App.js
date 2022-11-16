import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTaskList, getFirstTask } from './features/taskList';

function App() {
  const currentTaskList = useSelector(selectTaskList);
  const dispatch = useDispatch();
  
  /*
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getFirstTask);
  }
*/

  return (
   <div>
    <ul>
      {currentTaskList.map(task => <li>{task}</li>)}
    </ul>
    <br />
    <button> Get task One</button>
   </div>
   
  )
}

export default App;
