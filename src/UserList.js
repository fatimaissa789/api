import React, { useEffect, useState } from "react";
import Axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("SALUT DE ::::", res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, [])
  const liste =data.map((data, index) =>{
    return (
        <tr index={index} >
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
      </tr>
    )
});
  return (
      <div>
          <table>
  <tr>
  {/*   <th>Company</th>
    <th>Contact</th>
    <th>Country</th> */}
  </tr>
   {liste}
  
  
</table>
         

      </div>

  );

  
 

};

export default UserList;
