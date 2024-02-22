import { useState } from 'react';
import './App.css';
import Form from './Form.js';
import User from './User.js';
const Navbar = () => {
    const [flag, setFlag] = useState(0);
    const [userList, setUserList] = useState([]);
    const handleseeUsers = async (e) => {
        let res = await fetch("http://localhost:8000/getalluser/", {
          method: "GET"
        })
        res = await res.json();
        console.log(typeof(res[0]));
        setFlag(1);
        console.log(res);
        res.map((item)=>{
            console.log(item)
            userList.push({id: item._id, value: item});
        })
        setUserList(userList);
        console.log(userList);
      }
    return (
      <div>
        <ul className="navbar bg-primary d-flex justfiy-content-around">
            <li className="nav-item">
            <h2 className="text-white">User Management</h2>
            </li>
            <li className="nav-item mr-5">
                <button type="button" className='btn btn-warning text-white fw-bold'
                onClick={handleseeUsers}>See Users</button>
            </li>
        </ul>
        {
            flag == 1 ? 
            (
                userList.map((item) => (
                    <User key={item.id} value={item.value} />
                ))
            
            ): <Form />
        }
      </div>
    )
}
export default Navbar;