var eventHandler = {

  initialize: function()
  {
    console.log("haha");
    //document.getElementById("input").addEventListener('keypress', keyPressHandler, false);
    document.addEventListener('keypress', eventHandler.keyPressHandler, false); // <---- Enabling this will totally replace the input with nepali translisteration
  },

  // keyPressHandler Listener for the assigned field
  keyPressHandler: function(event)
  {

    if(event.ctrlKey || event.altKey)
    {
      //do absolutely nothing
    }
    else
    {
      var pressed = event.charCode;
      if(pressed < 126 && pressed > 32 )
      {
        console.log(npiext.unicodify(pressed));
        event.preventDefault();
        // ----- stops the event from further propagation i.e. keyup event wont occur
        // npiext.sendKeyToTarget(event, npiext.unicodify(pressed));
      }
    }
  }


};

eventHandler.initialize();
