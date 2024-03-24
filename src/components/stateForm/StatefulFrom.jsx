import { useState } from "react";

const StatefulFrom = () => {
    
    const [email,setEmail] = useState('') ;
    const [password,setPassword] = useState('')
    const hundlePasswordChenge = e =>{
      
        setPassword(e.target.value)
    }

    const hundleEmailchenge = e =>{
      
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault() 
      console.log(email)
      console.log(password)
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className="form" >
                <input type="text" name="name" placeholder="Enter your name" /><br />
                <input 
                onChange={hundleEmailchenge}
                 type="email" name="email" placeholder="Enter your email" /><br />
                <input onChange={hundlePasswordChenge} type="password" name="password" placeholder="Enter your password" /><br />
                <button  type="submit">
                    submit
                </button>
            </form>
        </div>
    );
};

export default StatefulFrom;