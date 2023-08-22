import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Forcreateandupdate.css';
import { useState, useEffect } from 'react';

function Forupdate(){ 

    const {id} = useParams();
    const navigate = useNavigate();
    const [values,setValues] = useState({
      id:id,
      name:'',
      age:'',
      email:''
    })

    const GetUser = () => {
      axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu/'+id)
      .then(res=>{setValues({...values,name:res.data.name, age:res.data.age, email:res.data.email})})
      .catch(err=>console.log(err))
    }

    const Updateuser = () => {
        axios.put(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu/`+id,values)
        .then(res=>navigate('/'))
      }

      useEffect(()=>{
        GetUser()
      },[])
    
    return(
      <div className="forcreateform">
      <div className="forform">
      <div className="createuser">UPDATE USER</div>
      <div>
        <form className="formhere">
        <input type='text' className="manipulatename" value={values.name} onChange={e=> setValues({...values, name: e.target.value})} /> 
        <input type='number' className="manipulateage" value={values.age} onChange={e=>setValues({...values, age: e.target.value})} />
        <input type='email' className="manipulateemail" value={values.email} onChange={e=>setValues({...values, email: e.target.value})} /> 
        <button className="forcreatebutton" onClick={Updateuser}>UPDATE</button>
        </form>
    </div>
    </div>
    </div>
    );
}
export default Forupdate;
