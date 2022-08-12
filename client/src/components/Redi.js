import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const Redi =  () => {
    const fname=useParams()
     const [lk, setlk] = useState(null);
     const [show,setShow]=useState("Redirecting...... ")
      useEffect(()=>{
        const getLink = async (n_link) => {
            const response = await fetch(`http://localhost:3001/api/links/get_url`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'new_link': n_link
              },
            });
        
            const json = await response.json()
            setlk(json[0].link);
            
          }
        getLink(fname.link);
        console.log(lk);
        if(lk!=null)
        window.location.href=lk;
        else
        setShow("Invalid Url")
      },)
      
      //window.location.href = "http://www."+fname.link+".com";



  return (
    <div> 
        {show}
    </div>
  )
}

export default Redi
