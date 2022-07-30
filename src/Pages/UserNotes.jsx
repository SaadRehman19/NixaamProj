import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState,useRef } from "react";
import {GrUpdate} from 'react-icons/gr'
// import Cardd from '../components/Cardd'

const UserNotes = ({Fname}) => {

  const inputRef=useRef()
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const [cards,setCard]=useState([])
  
  const onChange = (e) => {
    // console.log(text)
    setText(e.target.value);
    
  };
  const onclick = (e) => {
    e.preventDefault();
    setClick(true);
    SaveToLocalStorage(text)
    // inputRef.current.value=''
  };
  
  const update=()=>{
    inputRef.current.focus()
    setText(inputRef.current.value)
    setClick(false)
    console.log(inputRef.current.value)
  }
  

  function SaveToLocalStorage(text){
    // let notes;
    // if (localStorage.getItem("notes") === null) {
    //     notes = []
    // } else {
    //     notes = JSON.parse(localStorage.getItem("notes"));
    // }
    // notes.push(text);
    localStorage.setItem("notes", JSON.stringify(text));
  }
  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('notes'))
    setText(items)
    // console.log(items)
    setClick(true)
    // <Cardy/>
  },[])
  
  // const check=()=>{
  //   setCard([...cards,<Cardy/>])
  //   setClick(true);
  //   SaveToLocalStorage(text)
  // }

  return (
    <div>
      <div className="container">
        <h3 className="mt-4">User Notes List</h3>
        <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
          <Form.Control
            onChange={onChange}
            className="p-2"
            type="text"
            // name="Lname"
            placeholder="Write Notes"
            ref={inputRef}
          />
        </Form.Group>
        
        {/* {click &&<Button onClick={check} variant="success">
          Save
        </Button>
        }
        {cards.map(card=>card)} */}
        
        
      <Button onClick={onclick} variant="success">
          Save
        </Button>
        {click && 
        <Cardy/>
        }
        
    
        
        {/* {click ==''? alert('Please Write<Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>} */}
        
      </div>
    </div>
  );
  
  function Cardy(){
      
      
      
    return (
      <div className="mt-4">
      
      <div class="card col-lg-4">
    <img class="card-img-top" src="./klklk.jpg" alt="Card image cap" style={{width:'100%',height:'50%'}}></img>
    <div class="card-body ">
      <h5 class="card-title">User Notes</h5>
      <div className='d-flex justify-content-between'>
      <p class="card-text">{text}</p>
      <GrUpdate onClick={update}/>
      </div>
     
    </div>
  </div>
          {/* <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Notes List</Card.Header>
        <Card.Body className='d-flex justify-content-between'>
          <Card.Text>
            {text}
          </Card.Text>
          <GrUpdate onClick={update}/>
        </Card.Body>
      </Card>
       */}
          </div>
  )
  }
  
  
};

export default UserNotes;
