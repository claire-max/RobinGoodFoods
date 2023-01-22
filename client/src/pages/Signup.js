import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Footer from "../components/Footer";
import "../App.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    
    <div className="headersign">
      <header className="head font-bold text-lg "  style={{  fontSize:"x-large", textAlign: "center" }}>Welcome!</header>
      <Link className="btngotologin" to="/login">Go to Login</Link>
      <div clasName="bg-img2"  style={{  height:'75%' , textAlign: "center" }}></div>
      <br></br>
      <img src="https://images.pexels.com/photos/8472489/pexels-photo-8472489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>

      <div className="containersign my-1">
       <h10>Signup</h10>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row text-white space-between my-2">
          <label class="signuptextcolor" htmlFor="firstName">First Name:</label>
          <input style={{height: "40px"}}
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row text-white space-between my-2">
          <label class="signuptextcolor" htmlFor="lastName">Last Name:</label>
          <input style={{height: "40px"}}
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row text-white space-between my-2">
          <label class="signuptextcolor" htmlFor="email">Email:</label>
          <input className="text-dark" style={{height: "40px"}}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row text-white space-between my-2">
          <label class="signuptextcolor" htmlFor="pwd">Password:</label>
          <input style={{height: "40px"}}
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button className="submitsignbtn" style={{backgroundColor:'rgba(116,132,85)'}} type="submit">Submit</button>
        </div>
        <br></br>
      </form>
    
    </div>
    <Footer/>
    </div>
    
  );
}

export default Signup;
