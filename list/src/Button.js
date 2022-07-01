import React from 'react'
import { useState } from 'react'

const Button = () => {
     const [name,setName] = useState('Ibrahim');
     const [age,setAge] = useState(14);
   
        const handleClick=()=>{
         setName('Ibrah');
            console.log(name);
            setAge(20);
           console.log(age);
     }
 
    return (
    <div>
        <button onClick={handleClick}> click Me</button>
       {<p>My name is  {name} and i am {age} of age</p> }
    </div>
  );
}

export default Button