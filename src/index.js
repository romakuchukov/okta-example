module.hot && module.hot.accept();

import OktaSignIn from '@okta/okta-signin-widget';
import oktaConfig from './js/oktaconfig';
import '@okta/okta-signin-widget/dist/sass/okta-sign-in.scss';
import './scss/overrides.scss';

//import App from './cmp/App';




const signIn = new OktaSignIn(oktaConfig);

signIn.renderEl({ el: '#widget-container' }, (res) => {
  if (res.status === 'SUCCESS') {
    console.log('Do something with this sessionToken', res.session.token);
  } else {
  // The user can be in another authentication state that requires further action.
  // For more information about these states, see:
  //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
  }
});