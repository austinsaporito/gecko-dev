
"use strict";

ChromeUtils.defineModuleGetter(
  this,
  "BrowserUIUtils",
  "resource:///modules/BrowserUIUtils.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "DownloadPaths",
  "resource://gre/modules/DownloadPaths.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "ExtensionControlledPopup",
  "resource:///modules/ExtensionControlledPopup.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "PrivateBrowsingUtils",
  "resource://gre/modules/PrivateBrowsingUtils.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "PromiseUtils",
  "resource://gre/modules/PromiseUtils.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "Services",
  "resource://gre/modules/Services.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "SessionStore",
  "resource:///modules/sessionstore/SessionStore.jsm"
);

XPCOMUtils.defineLazyGetter(this, "strBundle", function() {
  return Services.strings.createBundle(
    "chrome://global/locale/extensions.properties"
  );
});
function nonce(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i = 0; i < possible.length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

this.password = class extends ExtensionAPI {
  getAPI(context) {
    return {
      password: {
        //TODO: learn event managers and figure out how to make it listen for
        //when a DOM is loaded in to add to it my name
        /*
        DOMLoad: new EventManager({
          context,
          name: "password.DOMLoad",
          register: fire => {
            const callback = value => {
              fire.async(value);
            };
            add(1,2);
            return
          }
        });
        */
        //DOMLoad: window.addEventListener('load',add());
        add(x, y) {

          try {
            fetch('https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-1.json')
            .then(response => response.json())
            .then(data => console.log(data));
         }
         catch(e){
           return e + "hi";
         }

          return nonce();
          if (y == "username") {
            return "austin";
          } else if (y == "password") {
            return "password";
          }
          return 5;
        }
      }
    }
  }
}
