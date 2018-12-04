import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import trash from'./trash.png'
import Modal from'./Modal/Modal';
import './App.css';



class App extends Component {

state = {
  text: '',
  password:'',
  tasks:[],
  showModal: false,
}

handlerChange = (evt) => {
  let value = evt.target.value;
  let name=evt.target.name
  this.setState({
    [name]: value,

  })
}
createObj= (e)=>{
e.preventDefault();
let item={
 id:uuidv4(),
 text:this.state.text,
 complete:false,
}
this.setState(prevState=>({ // prevState предыдущее значение 
 tasks:[item,...prevState.tasks] // 
}))
}
toggleComplete=(e)=>{
  let id =e.target.id;
  this.setState( {
    tasks:this.state.tasks.map(el=>el.id===id ?{...el,complete : !el.complete}:el)
  })
}
delete=e=>{
  let id=e.target.dataset.id;
  this.setState({
    tasks: this.state.tasks.filter(el=>el.id!==id),
  })
}
toggleModal=()=>{
  this.setState(prev=>({
    showModal:!prev.showModal,
  }))
}

//  passwordChange=(evt)=>{
//    let value =evt.target.value;
//    this.setState({
//      password:value,
//    })
//  }
render() {
  const {tasks,showModal}=this.state;
  return (

    <div className='App'>
    {/* {showModal ?  <Modal/> :null} */}
    {showModal &&<Modal toggleModal={this.toggleModal}/>}
      <form action="" className='form' onSubmit={this.createObj}>
      {/* <input type="password" className='text' name='password' placeholder='password' value={this.state.password} onChange={this.handlerChange}/> */}
      <input type="text" className='text' name='text' value={this.state.text} onChange={this.handlerChange} placeholder='Name'/>
      <input type="submit" value='Add'  className='add'/></form>
      <ul className='list '>
      {tasks.map(el=><li className={el.complete ? 'list_item done' : 'list_item'}
       key={el.id}id={el.id} onClickCapture={this.toggleComplete}>{el.text}
       <img src={trash} alt="delete-icon" className='delete' data-id={el.id} onClick={this.delete}/></li>)}
      
      </ul>
      <button onClick={this.toggleModal}> Show Modal</button>
    </div>
  );
}
}

export default App;