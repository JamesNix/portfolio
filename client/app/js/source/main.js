/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#theme').click(changeTheme);
  }

  var theme = 1;

  function changeTheme(){
    $('body').css('background-color', bkgColor);
  }

  function bkgColor(){
    var color;
    switch(theme){
      case 1:
        color = '#fff';
        theme += 1;
        break;
      case 2:
        color = '#aaa';
        theme = 1;
    }

  }

})();
