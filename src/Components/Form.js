import React, { Component } from 'react'

const initialValue= {
    Firstname:'',
    Lastname:'',
    Address:'',
    Emailid:'',
    Phonenumber:'',
    FirstnameError:'',
    LastnameError:'',
    EmailidError:'',
    PhonenumberError:''
}

class Form extends Component {
    constructor(props){
        super(props)

        this.state={initialValue} 
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
        })}

       validate=()=>{
           let FirstnameError="";
           let LastnameError="";
           let EmailidError="";
           let PhonenumberError ="";

           if (!this.state.Firstname){
            FirstnameError="First Name cannot be blank";
           }

           if (!this.state.Lastname){
            LastnameError="Last Name cannot be blank";
           }

           if (!this.state.Emailid.includes('@')){
            EmailidError="Invalid email id";
           }

           if (!this.state.Phonenumber.length >= 10){
            PhonenumberError="Enter correct Number";
           }



           if (FirstnameError || LastnameError|| EmailidError|| PhonenumberError){
               this.setState({FirstnameError,LastnameError,EmailidError,PhonenumberError});
               return false
           }
           return true;
        }
      
        handleSubmit=(event)=>{
            event.preventDefault();
            const isValid= this.validate();
            if(isValid){
            console.log(this.state)
            this.setState(initialValue);
        }
        
        }
    
  
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>Firstname</label>
               <input type= "text" value={this.state.Firstname} 
               onChange={this.nameChange}></input><br></br>
               <div style= {{  fontSize:10, color: "red"}}>{this.state.FirstnameError}</div>
               <br></br>

               <label>Lastname</label>
                <input type= "text" value={this.state.Lastname} 
                onChange={this.lnameChange}></input><br></br>
                <div style= {{  fontSize:10, color: "red"}}>{this.state.LastnameError}</div>
                <br></br>

              

               <label >Email</label>
               <input style={{marginLeft: 85}} type= "text" value={this.state.Emailid} 
               onChange={this.mailChange}></input><br></br>
               <div style= {{  fontSize:10, color: "red"}}>{this.state.EmailidError}</div>
               <br></br>

               <label>Phone number</label>
               <input style={{marginLeft: 26}} type= "text" value={this.state.Phonenumber} 
               onChange={this.phnChange}></input><br></br>
               <div style= {{  fontSize:10, color: "red"}}>{this.state.PhonenumberError}</div>
               <br></br>

               <button type="Submit" onClick={this.submitting}> Submit</button>
           </form>
        )
    }
}

export default Form
