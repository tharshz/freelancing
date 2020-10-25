import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';


export default class Form extends Component {


    state={
        name:'',
        lastname:'',
        email:'',
        message:'',
        sent:false,
        buttonText: 'Send Message',
    
    }
    
    
    // handle inputs 
    
    handleName = (e)=>{
    this.setState({
      name:e.target.value
    })
    }
    
    handleLastname = (e)=>{
      this.setState({
        lastname:e.target.value
      })
      }
    
    handleEmail = (e)=>{
      this.setState({
        email:e.target.value
      })
      }
    
    handleMessage = (e)=>{
      this.setState({
        message:e.target.value
      })
      }
    
    // end of handle inputs
    
    
    
    
    
    formSubmit=(e)=>{
      e.preventDefault();
     
     
      
      let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
      }
    
    
    
      
      axios.post('/api/forma',data)
      .then(res=>{
        this.setState({
          sent:true,
        },this.resetForm())
      })
      .catch(()=>{
        console.log('message not send');
        
      })
      
     
     }
    
    // for reseting the form data
    resetForm=()=>{
      this.setState({
        name:'',
        lastname:'',
        message:'',
        email:'',
      
      })
    
      setTimeout(()=>{
        this.setState({
          sent:false,
        
        
    
        })
      },3000)
    }
    
    
    
    
    
    
    
    
        render() {
            return (
              <div className="container-fluid Freelance__COntact__Container">
               <div className="row">
                  <div className="col-lg-6 Freelance__Contact__Col6">
                      <h3 className="Freelance__Contact__col6__Title">Contact us <br/>for hire the <br/> best freelancer <br/>for your project</h3>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-2">

                      </div>

                      <div className="col-lg-8">
                <form onSubmit={this.formSubmit} className="Frelance__Contact__form">
               
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleName} placeholder="your name..." />
                </div>
          
                <div className="form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" name="lastname" className="form-control" value={this.state.lastname} onChange={this.handleLastname} placeholder="your lastname..." />
                </div>
          
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleEmail} placeholder="your email..." required />
                </div>
          
                <div className="form-group">
                <label htmlFor="message">Message</label>
                  <textarea name="message" className="form-control" value={this.state.message} id="" cols="30" rows="5" placeholder="your message..." onChange={this.handleMessage}></textarea>
                </div>
          
                 
                
              
                <div className={this.state.sent?'msg msgAppear':'msg'}>Message has been sent</div>
                <button className="btn my__Btn2 btn-block btn-primary" type="submit">Submit</button>
                {/* <input type="submit" className="btn btn-primary my__Btn2 btn-block" value="Submit" /> */}
               </form>
                      </div>

                      <div className="col-lg-2">

                      </div>
                    </div>
                  </div>
               </div>
              </div>  
            )
        }
    }