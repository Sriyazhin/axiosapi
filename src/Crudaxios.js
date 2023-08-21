import { useState, useEffect } from "react";
import axios from 'axios';
import Forupdate from "./Forupdate";
import Forcreate from './Forcreate';
import { Link, useNavigate } from "react-router-dom";
import './App.css';

function Crudaxios() {
    const [users,setUsers] = useState([]);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [newName,setNewName] = useState('');
    const [newAge,setNewAge] = useState('');
    const [updateTrigger, setUpdateTrigger] = useState(false);
    const navigate = useNavigate();


    const clearForm = () => {
        setName('');
        setAge('');
        setNewName('');
        setNewAge('');
      };

    const GetUser = () => {
        axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu')
        .then(res=>setUsers(res.data))
      }


      function DeleteUser (currentId) {
        axios.delete(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu/${currentId}`)
        .then(res=>setUpdateTrigger(!updateTrigger))
      }
      
      // const Updateuser = () => {
      //   axios.put(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu/${userid}`,{name:newName,age:newAge})
      //   .then(res=>setUpdateTrigger(!updateTrigger))
      // }

      useEffect (() => {
        GetUser()
        
      },[updateTrigger]) 

    return(
       
     <div className="tabledivision">
        
      <table className='fortable'>
        <thead className="forthead">
          <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>UPDATE</th>
          <th className="deleteheading">DELETE</th>
          </tr>
        </thead>
        <tbody>
      {users.map((data,i) => 
      <tr className="forbodyrows" key={i}>      
      <td className="forid"> {data.id} </td>
       <td className='forname'> {data.name} </td>
       <td className="forage"> {data.age} </td> 
       <td className="foremail"> {data.email} </td>        
       <td className="foreditbutton"> <button className="editbutton" onClick={()=>{navigate(`/updatehere/${data.id}`)}}>Edit</button> </td>
       <td className="fordeletebutton"> <button className="deletebutton" onClick={()=>DeleteUser(data.id)}>Delete</button> </td>     
      
      </tr>     
      )}
      </tbody>
      </table>
      <div className="createbutton">
      <button className="forcreateuser" onClick={()=>{navigate('/createhere')}}>Create User</button>
      </div>
      
    </div>
    );
}
export default Crudaxios;