import React from 'react';
import { toast } from 'react-toastify';
//import Users from './Users';

const UserRow = ({ user, index,refetch,setDeletingDoctorset}) => {
    const {email,role}=user;
    const makeAdmin=()=> { 

fetch(`http://localhost:5000/user/admin/${email}`,



{
   
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }

})


.then(res=>{
    if(res.status ===403){
        toast.error('failed to make an admin')
    }
  return   res.json()})
.then(data=>{
  if(data.modifiedCount >0)
  {
    refetch();
    toast.success('SuccessFully made an Admin')
  }
})

    }
    return (

        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            {/* <td>{role !== 'admin' &&<button  onClick={makeAdmin} class="btn btn xs">Make Admin</button>}</td> */}
           
            <td>{role !== 'admin' ?<button  onClick={makeAdmin} class="btn btn xs">Make Admin</button>:<button  onClick={makeAdmin} class="btn btn xs"> Admin</button>}</td>
           
            {/* <td><button class="btn btn xs">Remove</button></td> */}
        </tr>

    );
};

export default UserRow;