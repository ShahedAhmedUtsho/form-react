

const Form = () => {
    const handleSubmit = e =>{
        
        e.preventDefault();
        console.log("submitted")
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form" >
                <input type="text" name="name" /><br />
                <input type="text" name="email" /><br />
                <button  type="submit">
                    submit
                </button>
            </form>
            
        </div>
    );
};

export default Form;