
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Footer from "../components/Footer";
import "../App.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="headerlog">
      <header className="head font-bold text-lg"  style={{  fontSize:"x-large", textAlign: "center" }}>Welcome Back!</header>
      <Link to="/signup"><button className="btndotosign">Go to Signup</button></Link>
    <div clasName="bg-img"  style={{  height:'75%' , textAlign: "center" }}>
    <br></br>
    <img src="https://images.pexels.com/photos/4109384/pexels-photo-4109384.jpeg">
  </img>
 
    <div className="containerlogin my-1">
     

      <h9>Login</h9>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2 text-white">
          <label  class="signuptextcolor" htmlFor="email">Email address:</label>
          <input style={{height: "40px"}}
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2 text-white">
          <label class="signuptextcolor" htmlFor="pwd">Password:</label>
          <input style={{height: "40px"}}
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button className="submitlogbtn" style={{backgroundColor:'rgba(116,132,85)'}} type="submit">Submit</button>
          
        </div>
        <br></br>
      </form>
      </div>
      <Footer className="" style={{backgroundColor:'rgb(72, 61, 61)'}} />
    </div>
   
    </div>
  
  );
}

export default Login;