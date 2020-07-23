export default function waitForElement(id, callback){
  var poops = setInterval(function() {
      if(document.getElementById(id)) {
          clearInterval(poops);
          callback();
      }
  }, 100);
};