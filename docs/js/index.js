import {App} from './app.js';

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW registered")
    console.log(registration);
  }).catch(error =>{
    console.error("SW registration failed")
    console.log(error);
  })
}

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

document.addEventListener("DOMContentLoaded", function () {
  window.app = new App();
});