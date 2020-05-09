import React from "react";
import history from '../../history';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            address:'',
            phone:''
        }
    }
    onNameChange = (event) =>{
        this.setState({username : event.target.value})
    }
    onEmailChange = (event) =>{
        this.setState({email : event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({password : event.target.value})
    }
    onAddressChange =(event) =>{
        this.setState({address : event.target.value})
    }
    onPhoneChange =(event) =>{
        this.setState({phone : event.target.value})
    }
    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                username: this.state.username,
                address: this.state.address,
                phone: this.state.phone
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user);
                this.props.handleAccount();
                history.push('/');
            }
        })
    }
    render(){
      return (
    <div>
        <div className="background-grocery"></div>
            <div className="center-card w-25 bg-white">

                <div className="text-center border border-light p-5" action="#!">

                    <p className="h4 mb-4">Register</p>

                    <div className="form-row mb-4">
                            <input t
                            ype="text" id="defaultRegisterFormFirstName"
                            className="form-control"
                             placeholder="Name"
                             onChange = {this.onNameChange}/>
                    </div>

                    <input type="email"
                    id="defaultRegisterFormEmail"
                    className="form-control mb-4"
                     placeholder="E-mail"
                     onChange = {this.onEmailChange}/>

                    <input type="password"
                    id="defaultRegisterFormPassword"
                    className="form-control" placeholder="Password"
                    aria-describedby="defaultRegisterFormPasswordHelpBlock"
                    onChange = {this.onPasswordChange}/>

                    <br/>
                    <div className="form-group">
                        <textarea
                        className="form-control rounded-0"
                        id="exampleFormControlTextarea2"
                        rows="4"
                        placeholder="Address"
                        onChange = {this.onAddressChange}></textarea>
                    </div>

                    <input
                    type="text"
                    id="defaultRegisterPhonePassword"
                    className="form-control"
                    placeholder="Phone number"
                    aria-describedby="defaultRegisterFormPhoneHelpBlock"
                    onChange = {this.onPhoneChange}/>

                    <button className="btn btn-info my-4 btn-block" type="submit" onClick = {this.onSubmitSignIn}>Register</button>

                </div>
        </div>
    </div>
  );
    }
};

export default Register;
