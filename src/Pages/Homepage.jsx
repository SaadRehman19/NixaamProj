import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { v4 as uuid } from 'uuid';
import UserNotes from './UserNotes'


const Homepage = () => {
  const navigate=useNavigate()
  const unique_id = uuid();
    const [data,setData]=useState([])

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Dob: "",
    Email: "",
    Cellphone: "",
  });

  const onchange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setFormData(() => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };
  
  const onclick=(e)=>{
    e.preventDefault();
  
    let re=/[0-9]{4}-[0-9]{7}/
    
    // console.log(formData)
    const{Fname,Lname,Dob,Email,Cellphone}=formData
    let cellformat=re.test(Cellphone)
    
 
    
    
    
    if(Fname=='' || Lname ==''|| Fname.length<3 || Lname.length <3){
        toast.error("Please Enter Correct Name")
    }
    else if(!Email.includes('@')){
        toast.error("Please Enter Correct Email Address")
    }
    else if(!cellformat){
        toast.error("Please Enter Correct Cellphone format (####-#######)") 
    }
    else{
        toast.success("Data has been added successfully")
        localStorage.setItem("User",JSON.stringify([...data,formData]))
        console.log(unique_id)
        localStorage.setItem("Token",JSON.stringify(unique_id))
        setTimeout(()=>{
            navigate('/login')
        },3000)
        
    }
  }

  return (
    <div>
      <div className="container mt-4 ">
        <section className="d-flex justify-content-between">
          <div className="leftpart mt-3 p-5" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-5 mb-3">Sign Up</h3>
            <Form >
              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Control
                  onChange={onchange}
                  className="p-2"
                  type="text"
                  name="Fname"
                  placeholder="Enter your FirstName"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Control
                  onChange={onchange}
                  className="p-2"
                  type="text"
                  name="Lname"
                  placeholder="Enter your LastName"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Control
                  onChange={onchange}
                  className="p-2"
                  type="date"
                  name="Dob"
                  placeholder="Enter your Date Of Birth"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-7"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={onchange}
                  className="p-2"
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-7"
                controlId="formBasicPassword"
              >
                <Form.Control
                  onChange={onchange}
                  className="p-2"
                  type="tel"
                  name="Cellphone"
                  placeholder="Enter Your CellPhone (#### - #######)"
                  pattern="[0-9]{4}-[0-9]{7}"
                />
              </Form.Group>

              <Button onClick={onclick}
                className="mb-3 col-lg-7"
                variant="primary"
                type="submit"
                style={{ background: "rgba(67,185,127)" }}
              >
                Submit
              </Button>
            </Form>
          </div>
          <div className="rightpart mt-7" style={{ width: "100%" }}>
            <img src="./Sign.svg" style={{ maxWidth: "580px" }} alt=""></img>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;

