import useHook from "../useHook";

const HookFrom = () => {


const [name,handleNameChenge] = useHook('shahed ahmed');





    const handleSubmit = (e)=>{

e.preventDefault()

console.log('from data ' ,name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form" >
                <input value={name} onChange={handleNameChenge} type="text" name="name" placeholder="Enter your name" /><br />
                <input 
                
                 type="email" name="email" placeholder="Enter your email" /><br />
                <input type="password" name="password" placeholder="Enter your password" /><br />
                <button  type="submit">
                    submit
                </button>
            </form>
            
        </div>
    );
};

export default HookFrom;