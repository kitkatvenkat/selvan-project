import { useState } from "react"

import "./Loginapp.css"
import { useNavigate } from "react-router-dom"


function Loginapp () {
    
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


   const [error1,seterror1]=useState("")
   const [error2,seterror2]=useState("")
   const navigate =useNavigate()

   let logindata =[
    {id:1,email:"selvan@gmail.com",password:"selvan"},
    {id:2,email:"selvan2@gmail.com",password:"selvan2"},
    {id:3,email:"selvan3@gmail.com",password:"selvan3"}
   ]

   function login() {

    seterror1("")
    seterror2("")

    if (!email) {
        seterror1("pleace enter the email")
        // console.log("pleace enter the email")
    }
    else if (!password) {
        seterror2("pleace enter the password")
        // console.log("pleace enter the password")
    }
    else {
       const condition= logindata.find((v,i)=>
    //    console.log( v)
       v.email===email && v.password===password
       )
       if (condition) {
        console.log("success")
        navigate("/home",{ replace: true })
       }
       else {
        alert("email and password not matched") 
       }
        
    
    }

   }

   
    return(
        <>
        <div className="container">
            <div className="left-panel" >
    
</div>
            <div className="subcontainer">
                <div className="box">
                    <div className="head">Login</div>
                    <div className="gmail">
                        <label>Gmail :</label> <input type="email" className="input1" onChange={(e) =>{
                            setemail(e.target.value)
                        }} />
                    </div>
                    <div className="error">{error1}</div>
                    <div className="password">
                        <label>Password :</label> <input type="password" className="input2" onChange={(e)=> {
                            setpassword(e.target.value)
                        }}/>
                        </div>
                        <div className="error">{error2}</div>
                    <button className="btn" onClick={login}>Login</button>    
                </div>
            </div>
        </div>
        
        
        </>
    );





}

export default Loginapp;