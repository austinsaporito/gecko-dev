
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
        window.addEventListener('load',add());
        add(x, y) {
          try {
           return document.forms.length + "howdy";
         }
         catch(e){
           return e + "hi";
         }

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
