

const ReuseForm = ( {handleSubmit,title,children}) => {
    const handleNowSubmit = (e) => {
        e.preventDefault() ;
        const data = {
            title : title ,
            UserName : e.target.name.value,
            email : e.target.email.value,

        }
        handleSubmit(data)

    }
    return (
        <div>
            {children}
            <form onSubmit={handleNowSubmit} className="form" >
                <input  type="text" name="name" /><br />
                <input type="email" name="email" /><br />
                <button  type="submit">
                    {title}
                </button>
            </form>
        </div>
    );
};

export default ReuseForm;