import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios';
  const User = () => {
     let [data, setData] = useState([]);
     useEffect(() => {
              axios.get('http://localhost:8899/api/user').then((res) => setData(res.data)).catch((e) => console.log(e));

  
  },[data]);
  return (
    <>
     <div className='mt-5' style={{marginLeft:"250px" , backgroundColor:"violet", width:"80px"}}>
      {
        data.map((data)=>{
            return (
                   
                 <table class="table table-striped table-dark w-75  " key={data._id} style={{display:"contents", alignContent:"center"}}>
                    <thead>
                    <tr>
                     <th scope="col">Email</th>
                    <th scope="col">Password</th>
                     </tr>
                         </thead>
                        <tbody>
                        <tr>
                        <td>{data.Email}</td>
                         <td>{data.Password}</td>
                        </tr>
                        </tbody>
                    </table>   
                        
            )
        })
      }
   
   </div>
   
   </>
  )
}

export default User
