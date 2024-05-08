import React,  {useState} from 'react'
import "../App.css"

const Todolist = () => {
    const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState("")
      const [showFinished,setshowFinished] = useState(false)
      const [showProcessing,setshowProcessing]= useState(true)
      // const [CompletedTodos,setCompletedTodos] = useState([]);
      

      const handleAddTodo = (index) => {
        if (newTodo.trim() !== ""){;
         setTodos([...todos,{ text: newTodo.trim(), checked: false}]);
        setNewTodo("");
        }
     };
       

 
     

     const ToggleFinished = (index) => {
           setshowFinished(!showFinished)
          // setshowProcessing(!showP)
     }

     const ToggleProcess = (index) => {
             setshowProcessing(!showProcessing)

     }
    
     const handleDeleteTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);

     }
  
     
    const handlerToggleTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].checked = !newTodos[index].checked;
      setTodos(newTodos);
    };



  return (
    <div>
      <div className='happy'>
      <div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-12 col-md-8 col-lg-6 col-xl-5">
   <div class="card bg-black text-white" style={{borderRadius:"1rem"}}>
   <div class="card-body p-5 text-center">

        <center>
        <h1 style={{color:"blueviolet", fontFamily:"serif"}}>TodoList</h1>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button  className='btn btn-primary' style={{marginLeft:"5px"}} onClick={handleAddTodo}>Add</button>
        
      <h6  style={{ marginTop:"10px", color:"blue", fontFamily:"sans-serif"}}><input  className="me-2 rounded-checkbox "  onChange={ToggleFinished} type='checkbox' value={setshowFinished}/>Completed Task</h6>

         <h6  style={{ marginTop:"10px", color:"blue", fontFamily:"sans-serif"}}><input  className="me-2 rounded-checkbox  "  onChange={ToggleProcess} type='checkbox' value={setshowProcessing} />In Process</h6>
     
      </center>

                <center>
        <ul>



          {todos.map((todo, index) => (
            
             (showFinished || !todo.checked ) && 



              (showProcessing || !todo.checked)  &&


            <div key={index}style={{}}>
           
              <div style={{}}>



              <input className="me-2" type='checkbox' checked={todo.checked} onChange={() => handlerToggleTodo(index)}/>


              <span style={{marginRight: "10px", textDecoration: todo.checked ? "underline" : "none"}}>
                {todo.text}
              </span>


          <button className='btn btn-primary' style={{marginTop:"5px", marginBottom:"5px"}} onClick={() => handleDeleteTodo(index) }>Delete</button>


{/* 
          <button className='btn btn-primary  me-2 '  style={{marginTop:"5px", marginBottom:"5px", marginLeft:"20px",color:"white"}}   onChange={ToggleProcess} type='' value={setshowProcessing}>Todo</button> */}


          </div>
            </div>
           ))}
        </ul>
        
        </center>
        
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
     </div>


  )
}

export default Todolist
