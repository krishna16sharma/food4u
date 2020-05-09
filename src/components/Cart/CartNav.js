import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Navigation/Navigation.css';
import history from '../../history';
//import './App.css';

const CartNav = ({isSignedIn,handleAccount,user,setProduct}) =>{
    const [dropdownOpen, setOpen] = React.useState(false);
    const toggle = () => setOpen(!dropdownOpen);
            if(isSignedIn){
                return(
                    <ul id='navbar' className='main-nav sticky zone red-bg'>
                        <li class="homeicon" onClick={() => history.push("/")}><FontAwesomeIcon icon={faHome}/>
                        Home <div className="tooltiptext">Go to Homepage</div></li>
                        <li><i className='fas fa-shopping-cart'></i> Cart</li>
                        <li>
                            <div className="flex">
                                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                  <DropdownToggle color="black" id="bootstrap-override" caret>
                                    {user.username}
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem onClick={( )=> history.push('/cart')}><i className='fas fa-shopping-cart'></i> Cart</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem onClick={() => handleAccount()}>Logout</DropdownItem>
                                  </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </li>
                    </ul>);
            }else{
                return(
                    <ul id='navbar' className='main-nav sticky zone red-bg'>
                            <li className="homeicon" onClick={() => history.push("/")}><FontAwesomeIcon icon={faHome}/>
                            Home<div className="tooltiptext">Go to Homepage</div></li>
                            <li><i className='fas fa-shopping-cart'></i> Cart</li>
                            <li>
                                <div>
                                    <div className="button"
                                    onClick = {() => window.location='/signin'}>Sign In</div>
                                    <div className="button"
                                    onClick = {() => window.location='/register'}>Register</div>
                                </div>
                            </li>
                        </ul>
                );
            }
}
export default CartNav;
