// const config = {
//   baseUrl: 'https://${yourOktaDomain}',
//   logo: 'logo.png'
// };



const config = {
  // Enable or disable widget functionality with the following options. Some of these features require additional configuration in your Okta admin settings. Detailed information can be found here: https://github.com/okta/okta-signin-widget#okta-sign-in-widget
  // Look and feel changes:
  baseUrl: 'https://${yourOktaDomain}',
  logo: 'logo.png', // Try changing "okta.com" to other domains, like: "workday.com", "splunk.com", or "delmonte.com"
  language: 'en',                       // Try: [fr, de, es, ja, zh-CN] Full list: https://github.com/okta/okta-signin-widget#language-and-text
  i18n: {
    //Overrides default text when using English. Override other languages by adding additional sections.
    'en': {
      'primaryauth.title': 'Sign In',   // Changes the sign in text
      'primaryauth.submit': 'Sign In',  // Changes the sign in button
      // More e.g. [primaryauth.username.placeholder,  primaryauth.password.placeholder, needhelp, etc.].
      // Full list here: https://github.com/okta/okta-signin-widget/blob/master/packages/@okta/i18n/dist/properties/login.properties
    }
  },
  // Changes to widget functionality
  features: {
    registration: true,                 // Enable self-service registration flow
    rememberMe: true,                   // Setting to false will remove the checkbox to save username
    //multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
    //selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
    //smsRecovery: true,                // Enable SMS-based account recovery
    //callRecovery: true,               // Enable voice call-based account recovery
    router: true,                       // Leave this set to true for the API demo
  },
  clientId: '',
  redirectUri: '',
  authParams: {
    issuer: '',
    responseType: ['id_token', 'token'],
    scopes: ['openid', 'email', 'profile'],
  },
};


export default config;