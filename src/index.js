module.hot && module.hot.accept();

import OktaSignIn from '@okta/okta-signin-widget';
import oktaConfig from './js/oktaconfig';
import '@okta/okta-signin-widget/dist/sass/okta-sign-in.scss';
import './scss/style.scss';


const sidePanel = document.createElement('div');
sidePanel.id = 'side-panel';
document.getElementById('widget-container').appendChild(sidePanel);

// function waitForElement(id, callback){
//   var poops = setInterval(function(){
//       if(document.getElementById(id)){
//           clearInterval(poops);
//           callback();
//       }
//   }, 100);
// }

// waitForElement('okta-signin-password', function() {
//   const username = document.getElementById('okta-signin-username');
//   const password = document.getElementById('okta-signin-password');
//   username.value = '';
//   password.value = '';
//   username.setAttribute('autocomplete', 'chrome-off')
//   password.setAttribute('autocomplete', 'new-password')
//   //document.getElementById('account-recovery-username').value = '';
//   console.log(document.querySelector('.primary-auth-form'));
//   document.querySelector('.primary-auth-form').setAttribute('autocomplete', 'chrome-off');
//   console.log("element is loaded.. do stuff");
// });

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