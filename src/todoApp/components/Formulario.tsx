import useForm from '../../hooks/useForm'




const Formulario = () => {
    const {name,email,handleChange,form} =useForm(
       { email:'Jefrydep@gmail.com',
        name:'Jefry'}
    );
     
   
        

    
 
    return (
        <form autoComplete='off' >
            <div className="container">
                <div className="label">email</div>
                <input value={email}  type="email" className="input" name='email' onChange={handleChange}/>
            </div>
            <div className="container">
                <div className="label">name</div>
                <input value={name} type="text" className="input" name='name' onChange={handleChange} />
            </div>
          
        </form>

    )
}

export default Formulario