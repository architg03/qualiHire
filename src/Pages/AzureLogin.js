import React, { Component } from 'react';
import * as AuthenticationContext from 'adal-angular';

class AzureLogin extends Component {
  constructor(props) {
    super(props);

    this.adalConfig = {
      tenant: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',
      clientId: 'a1f2db53-f35a-401e-a7a9-a2c02ff5427e',
      redirectUri: window.location.origin + '/callback',
    };

    this.authContext = new AuthenticationContext(this.adalConfig);
  }

  login = () => {
    this.authContext.login();
  }

  logout = () => {
    this.authContext.logOut();
  }

  render() {
    const isAuthenticated = this.authContext.getCachedUser() !== null;

    return (
      <div>
        {isAuthenticated ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <button onClick={this.login}>Login</button>
        )}
      </div>
    );
  }
}

export default AzureLogin;