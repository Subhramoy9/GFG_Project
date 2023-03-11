import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [email,setEmail]= useState("");
    const [pass,setPass] = useState("");
    let navigate = useNavigate();
    

    const submit = (e)=>{
      if(email === "" || pass === ""){
        alert("enter all the fields")
      }
      else{
      setEmail("");
      setPass("");
      navigate("/", { replace: true });
      }
      e.preventDefault();
    }

  return (
    <>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPass(e.target.value);console.log(pass)}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="password" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
</form>
<div>
    Already have an account?<Link to={'/login'}>signin</Link>
</div>
</>
  )
}

export default Signup