import { useState, useEffect } from "react";
import axios from 'axios';
import './Forcreateandupdate.css';
import { useNavigate } from "react-router-dom";


function Forcreate(){
    
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
      
      const CreateUser = () => {
        axios.post('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu',{name:name,age:age,email:email})
        
    }
    

    return(
        <div className="forcreateform">
            <div className="forform">
            <div className="createuser">CREATE USER</div>
            <div>
            <form className="formhere">
            <input type='text' className="manipulatename" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type='number' className="manipulateage" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)} />        
            <input type='email' className="manipulateemail" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        
            <button className="forcreatebutton" onClick={()=>{CreateUser(); navigate('/')}}>CREATE</button>
            </form>
            </div>
            </div>
        </div>
    
    );
}
export default Forcreate;
