module.hot && module.hot.accept();

import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

//import App from './cmp/App';




const signIn = new OktaSignIn({baseUrl: 'https://${yourOktaDomain}'});

signIn.renderEl({ el: '#widget-container' }, (res) => {
  if (res.status === 'SUCCESS') {
    console.log('Do something with this sessionToken', res.session.token);
  } else {
  // The user can be in another authentication state that requires further action.
  // For more information about these states, see:
  //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
  }
});