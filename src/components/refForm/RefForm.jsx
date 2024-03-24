import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef('')


    const handleSubmit = e => {
        e.preventDefault();
        
        console.log( nameRef.current.value); 
    }
    
    return (
        <div>

             <form onSubmit={handleSubmit} className="form" >

                <input ref={nameRef} type="text" name="name" /><br />
                <input type="text" name="email" /><br />
              


                <button  type="submit">
                    submit
                </button>

            </form>


        </div>
    );
};

export default RefForm;