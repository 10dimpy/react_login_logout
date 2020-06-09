import React from "react";
import loginImg from "../login.svg";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

  const responseFacebook = (response) => {
      console.log(response);
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
             <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        <br>
        </br>
       <FacebookLogin
        appId="2604156313177924"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br>
        </br>
         <GoogleLogin
        clientId="719961539924-2kkctsa157ujitmmnila4kp67cn56mcp.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <p> if you don''t have an account then <a href=""> Register</a></p>
      </div>
    );
  }
}