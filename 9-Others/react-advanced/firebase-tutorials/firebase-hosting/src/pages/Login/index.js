import React from "react";
import { firebaseHelper as firebase } from "../../config/constants";

import { Button, ButtonGroup } from 'reactstrap';

import LoginComponent from '../../components/LoginComponent';

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "firebaseAppToken";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in: ", JSON.stringify(user));

        localStorage.removeItem(firebaseAuthKey);

        // here you could authenticate with you web server to get the
        // application specific token so that you do not have to
        // authenticate with firebase every time a user logs in
        localStorage.setItem(appTokenKey, user.uid);
        this.setState({ user: user });
      }
    });
  }

  handleCreateUser = () => {
    firebase.auth()
      .createUserWithEmailAndPassword('tungnt@ames.edu.vn', '123456789')
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode + ' | ' + errorMessage);
      });
  }

  handleLogin = () => {
    firebase.auth()
      .signInWithEmailAndPassword('tungnt@ames.edu.vn', '123456789')
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode + ' | ' + errorMessage);
      });
  }

  handleSignOut = () => {
    const component = this;
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log("Sign out successful");
      component.setState({ user: {} });
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + ' | ' + errorMessage);
    });
  }

  handleLoginWithPhoneNumber = () => {
    // 'recaptcha-container' is the ID of an element in the DOM.
    var applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber('+840905157803', applicationVerifier)
      .then(function (confirmationResult) {
        var verificationCode = window.prompt('Please enter the verification ' +
          'code that was sent to your mobile device.');
        return confirmationResult.confirm(verificationCode);
      })
      .catch(function (error) {
        console.log(error);
        // Handle Errors here.
      });
  }

  handleLoginWithFacebook = () => {
    // Sign in using a redirect.
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    })
    // Start a sign in process for an unauthenticated user.
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('user_birthday');
    firebase.auth().signInWithRedirect(provider);
  }

  handleLoginWithFacebookPopup = () => {
    // Sign in using a popup.
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    });
  }

  handleLoginWithGoogle = () => {
    // Using a redirect.
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    });

    // Start a sign in process for an unauthenticated user.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
  render() {
    return (
      <div style={{ "marginBottom": "30px" }}>
        <h6>Firebase  - Auth Examples</h6>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <LoginComponent user={this.state.user} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div style={{ paddingTop: '10px', paddingBottom: '10px' }} id="recaptcha-container"></div>
            <ButtonGroup>
              <Button color="primary" onClick={this.handleCreateUser}>Create User</Button>
              <Button color="danger" onClick={this.handleLogin}>Login (Email / Password)</Button>
              <Button color="info" onClick={this.handleLoginWithPhoneNumber}>Login (Phone)</Button>
              <Button color="primary" onClick={this.handleLoginWithFacebook}>Login (Facebook - Redirect)</Button>
              <Button color="primary" onClick={this.handleLoginWithFacebookPopup}>Login (Facebook - Popup)</Button>
              <Button color="danger" onClick={this.handleLoginWithGoogle}>Login (Google)</Button>
              <Button onClick={this.handleSignOut}>SignOut</Button>
            </ButtonGroup></div>
        </div>
      </div>
    );
  }
}