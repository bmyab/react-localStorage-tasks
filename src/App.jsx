import {useState , useEffect} from 'react'
import TaskCreator from "./components/TaskCreator";
import Swal from 'sweetalert2'
import TaskList from './components/TaskList';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);


  const createTask = (taskName)=>{
    console.log(taskName)

    if(!taskItems.find( task => task.name === taskName)){
      setTaskItems([...taskItems , {name:taskName , done:false}])
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tarea Repetida',
        showConfirmButton: false,
        timer: 1000
      })
    }

  }

  const toogleTask = (task)=>{
    setTaskItems(
      taskItems.map( tarea =>(tarea.name === task.name) ? {...tarea , done:!tarea.done} : tarea)
    )
  }

  const cleanTask = ()=>{
    setTaskItems(
      taskItems.filter( task => !task.done)
    )
    setShowCompleted(false)
  }

  useEffect ( ()=>{
    let datos = localStorage.getItem('tasks');

    if( datos ){
      setTaskItems(JSON.parse( datos ));
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('tasks' , JSON.stringify(taskItems));
  }, [taskItems]);
  

 
  return (
    <div className="container">
      <h1>Todo Task Complete</h1>
      <TaskCreator crearTarea={createTask} />
      <TaskList  taskItems={taskItems} toogleTask={toogleTask}/>

      <VisibilityControl 
        isChecked = {showCompleted}
        setShowCompleted={(valor)=>setShowCompleted(valor)} 
        cleanTask={cleanTask} />

      {
        showCompleted &&  <TaskList  taskItems={taskItems} toogleTask={toogleTask} showCompleted = {showCompleted}/>
      }

     
    </div>
  );
}

export default App;
