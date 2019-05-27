import React from 'react'

class BadgeForm extends React.Component{
    handleChange = (e) =>{
        console.log({
            name: e.target.name,            
            value: e.target.value});
    }

    handleClick = (e) =>{
        console.log("Botton Guardar")
     }
     handleSubmit = (e) =>{
         e.preventDefault();
         console.log("Form was sobmit")
     }

    render(){
        return (
           <div>
               <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
              </div>
        )
    }
}

export default BadgeForm;