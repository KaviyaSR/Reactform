import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            Firstname:'',
            Lastname:'',
            Address:'',
            Emailid:'',
            Phonenumber:'',
            FirstnameError:'',
            LastnameError:'Field is Empty',
            AddressError:'Field is Empty',
            EmailidError:'Field is Empty',
            PhonenumberError:'Field is Empty'


        }
    }
    nameChange=(change) => {
     this.setState({
         Firstname :change.target.value
     })
    }

    lnameChange=(change) => {
        this.setState({
            Lastname :change.target.value
        })
       }

      addChange =(change) => {
        this.setState({
            Address :change.target.value
        })
       }

       mailChange=(change) => {
        this.setState({
            Emailid :change.target.value
        })
       }

       phnChange=(change) => {
        this.setState({
            Phonenumber:change.target.value
        })
       }

       Validate=()=>{
           let FirstnameError="";

           if(!this.state.Firstname){ 
            FirstnameError="Name cannot be blank";
           }
           if(FirstnameError){
               this.setState({FirstnameError});
               return false;
           }
           return true;
       }

       submitting=() =>
       {
           alert (`"Welcome" ${this.state.Firstname} ${this.state.Lastname}`)
       }
  handleSubmit=(change) => {
      change.preventDefault();
       const isValid =this.Validate();
       if(isValid){
           console.log(this.state)
       }

  }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>Firstname</label>
               <input type= "text" value={this.state.Firstname} 
               onChange={this.nameChange}></input><br></br>
               
               <br></br>

               <label>Lastname</label>
                <input type= "text" value={this.state.Lastname} 
                onChange={this.lnameChange}></input><br></br><br></br>

               <label>Address</label>
               <input type= "text" value={this.state.Address} 
               onChange={this.addChange}></input><br></br><br></br>

               <label>Emailid</label>
               <input type= "text" value={this.state.Emailid} 
               onChange={this.mailChange}></input><br></br><br></br>

               <label>Phone number</label>
               <input type= "text" value={this.state.Phonenumber} 
               onChange={this.phnChange}></input><br></br><br></br>

               <button type="Submit" onClick={this.submitting}> Submit</button>
           </form>
        )
    }
}

export default Form
