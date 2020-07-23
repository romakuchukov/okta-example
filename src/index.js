module.hot && module.hot.accept();

import OktaSignIn from '@okta/okta-signin-widget';
import oktaConfig from './js/oktaconfig';
import waitForElement from './js/waitforelement';
import '@okta/okta-signin-widget/dist/sass/okta-sign-in.scss';
import './scss/style.scss';


const sidePanel = document.createElement('div');
sidePanel.id = 'side-panel';
document.getElementById('widget-container').appendChild(sidePanel);


waitForElement('okta-signin-password', function() {
  // https://stackoverflow.com/questions/15738259/disabling-chrome-autofill
  // https://stackoverflow.com/questions/12374442/chrome-ignores-autocomplete-off
  // autocomplete bug fix
  const autofillFix = document.createElement('input');
  const form = document.querySelector('form');

  autofillFix.style = 'display:none;';
  form.prepend(autofillFix);

  const username = document.getElementById('okta-signin-username');
  const password = document.getElementById('okta-signin-password');

  username.setAttribute('autocomplete', 'chrome-off');
  password.setAttribute('autocomplete', 'new-password');
});


const signIn = new OktaSignIn(oktaConfig);

const success = (res) => {
  if (res.status === 'SUCCESS') {
    console.log('Do something with this sessionToken', res.session.token);
  } else {
  // The user can be in another authentication state that requires further action.
  // For more information about these states, see:
  //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
  }
};

signIn.renderEl({ el: '#widget-container' }, success);