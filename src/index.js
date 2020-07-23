module.hot && module.hot.accept();

import OktaSignIn from '@okta/okta-signin-widget';
import oktaConfig from './js/oktaconfig';
import waitForElement from './js/waitforelement';
import '@okta/okta-signin-widget/dist/sass/okta-sign-in.scss';
import './scss/style.scss';


const sidePanel = document.createElement('div');
sidePanel.id = 'side-panel';
document.getElementById('widget-container').appendChild(sidePanel);

function waitForElement(id, callback){
  var poops = setInterval(function(){
      if(document.getElementById(id)){
          clearInterval(poops);
          callback();
      }
  }, 100);
}

waitForElement('okta-signin-password', function() {
  const preventAutofill = document.createElement('input');
  const passwordFake = document.createElement('input');
  preventAutofill.type = 'text';
  passwordFake.type = 'password';
  preventAutofill.value = '';
  passwordFake.value = '';
  preventAutofill.style = 'display:none;';
  passwordFake.style = 'display:none;';
  // preventAutofill.id = 'side-panel';

  document.querySelector('.primary-auth-form').prepend(preventAutofill);
  document.querySelector('.primary-auth-form').prepend(passwordFake);

  // <input type="text" name="prevent_autofill" id="prevent_autofill" value="" style="display:none;">
  // <input type="password" name="password_fake" id="password_fake" value="" style="display:none;">


  const username = document.getElementById('okta-signin-username');
  const password = document.getElementById('okta-signin-password');
  // https://stackoverflow.com/questions/15738259/disabling-chrome-autofill
  // https://stackoverflow.com/questions/12374442/chrome-ignores-autocomplete-off
  username.value = '';
  password.value = '';
  username.setAttribute('autocomplete', 'chrome-off');
  password.setAttribute('autocomplete', 'new-password');
  document.querySelector('.primary-auth-form').setAttribute('autocomplete', 'false');
  document.querySelector('.primary-auth-form').reset();
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