import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'

const Login = () => {
    const navigate=useNavigate()
    const token = JSON.parse(localStorage.getItem('Token'))
    console.log(token)
    useEffect(()=>{
        if(token==null){
            navigate('/')
            }
    },[])
   
  return (
    <div>
      <div className="container mt-4 ">
        <section className="d-flex justify-content-between">
          <div className="leftpart mt-7 p-5" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-5 mb-3">Sign Up</h3>
            <Form >
              <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                <Form.Control
                //   onChange={onchange}
                  className="p-2"
                  type="text"
                  name="Fname"
                  placeholder="Enter your FirstName"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-7"
                controlId="formBasicPassword"
              >
                <Form.Control
                //   onChange={onchange}
                  className="p-2"
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>

              <Button onClick={onclick}
                className="mb-3 col-lg-7"
                variant="primary"
                type="submit"
                style={{ background: "rgba(67,185,127)" }}
              >
                Login
              </Button>
            </Form>
          </div>
          <div className="rightpart mt-2" style={{ width: "100%" }}>
            <img src="./ll.webp" style={{ maxWidth: "580px" }} alt=""></img>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
