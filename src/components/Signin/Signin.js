import React from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Signin.css';
import {Redirect} from 'react-router-dom';
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

class Signin extends React.Component{
        constructor(props){
            super(props);

            this.onSubmitSignIn=this.onSubmitSignIn.bind(this);
            this.state = {
                signInEmail: '',
                signInPassword: '',
            }
        }
        onEmailChange = (event) =>{
                this.setState({signInEmail : event.target.value})
            }
        onPasswordChange = (event) =>{
                this.setState({signInPassword : event.target.value})
            }
        onSubmitSignIn = () =>{
                fetch('http://localhost:3000/signin',{
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: this.state.signInEmail,
                        password: this.state.signInPassword
                    })
                })
                .then(response => response.json())
                .then(user => {
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
    <MDBContainer className="center-card">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Sign in:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange = {this.onEmailChange}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange = {this.onPasswordChange}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="deep-orange"
                  className="mb-3"
                  onClick={this.onSubmitSignIn}
                >
                  Sign in
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p id="NotMember" onClick = {() => history.push('/register')}>Not a member? Register</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
 }
};

export default Signin;
