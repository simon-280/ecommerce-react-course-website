import { Form, useForm } from "react-hook-form"
import { useState } from "react"
export default function Auth() {
  const [mode, setmode] = useState("log in")
  const {register, handleSubmit, formState: {errors}} = useForm()
  function onSubmit()
  {
       alert("signed up")
  }
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode==="sign up"? "sign up" : "log in"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input 
              type="email"  
              className="form-input" 
              id="email"
               {...register("emai", {required: "email is required"}
    
               )}
               />
            </div>
             <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
               type="password"
                 className="form-input"
                  id="password"
                  {...register("password", {required: "password is required",
                    minLength: {
                      value: 6,
                      massege: "password must have at least 6 characters"
                     },
                     maxLength: {
                      value: 12,
                      massege: "password must contain not greater than 12 characters"
                     }
                  })}
                  />
            </div>
            <button type="submit" className="btn btn-primary btn-large" >
               {mode==="sign up"? "sign up" : "log in"}
            </button>
          </form>
          <div className="auth-switch">

             {mode==="sign up"? ( 
              
             <p>alredy have an account ? <span className="auth-link" onClick={()=> setmode("log in")}>login</span></p>
             )
             
              : <p>dont have an account <span className="auth-link" onClick={()=> setmode("sign up")}>sign up</span></p>}
      
          </div>
        </div>
      </div>
    </div>
  )
}