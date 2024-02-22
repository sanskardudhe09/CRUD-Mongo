import "./App.css";
import react, { useState } from "react";
const Form = ()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name == '' || email == '' || age == '' || role == ''){
      alert("PLease enter all Required Details!!");
    }
    if(!email.includes("@")){
      alert("PLease enter a valid email!!")
    }
    let res = await fetch("http://localhost:8000/createuser/", {
      method: "POST",
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({name,email,age,role})
    });
    res = await res.json();
    //localStorage.setItem("user", JSON.stringify(res));
    console.log(res);
    setName("");
    setEmail("");
    setAge("");
    setRole("");
  }
    return (
    <>
      <h1 className='mt-3 ml-3 fs-2 text-center'>Fill the User Data</h1>
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
              <div className="formitems mb-3 mt-3 fs-4">
                <label className="form-label pl-0">Name </label>
                <input type = "text" placeholder="Enter your Name" className="form-control"
                value = {name} onChange={(e)=>setName(e.target.value)}></input>
              </div>
              <div className="formitems mb-3 fs-4">
                <label className="form-label">Email </label>
                <input type = "text" placeholder="Enter your Email" className="form-control"
                value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="formitems mb-3 fs-4">
                <label className="form-label">Age </label>
                <input type = "number" placeholder="Enter your Age" className="form-control"
                value = {age} onChange={(e)=>setAge(e.target.value)}></input>
              </div>
              <div className="formitems mb-3 fs-4">
                <label className="form-label">Role </label>
                <input type = "text" placeholder="Enter your Role" className="form-control"
                value = {role} onChange={(e)=>setRole(e.target.value)}></input>
              </div>
              <div className="row">
                <div className ="col">
                   <button type="submit" className="btn btn-success mt-3 ml-3 text-white">Submit</button>
                </div>
              </div>
            </form>
        </div>
      </>
    )
}
export default Form;