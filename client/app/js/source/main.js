/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#location').click(getLocation);
    $('#weather').click(getWeather);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      $('.modal-body p').text(position.coords.latitude +', '+position.coords.longitude);
    });
  }

  function getWeather() {
    debugger;
    var url = 'https://api.wunderground.com/api/57ade16c229bf559/conditions/q/autoip.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data) {
    var $div = $('<div>');
    debugger;
    console.log(data);
    console.log(data.current_observation.temperature_string);
    console.log(data.current_observation.weather);
    console.log(data.current_observation.display_location.full);
    console.log(data.current_observation.icon_url);
    console.log(data.current_observation.icon);
    console.log(data.current_observation.observation_time);
    
    $div.addClass('weatherBox');
    $div.append($('<img>').attr('src', data.current_observation.icon_url).addClass('weatherIconBox'));
    $div.append($('<br>'));
    $div.append($('<span>').text(data.current_observation.display_location.full));
    $div.append($('<br>'));
    $div.append($('<span>').text(data.current_observation.weather));
    $div.append($('<br>'));
    $div.append($('<span>').text(data.current_observation.temperature_string));
    $div.append($('<br>'));
    $div.append($('<span>').text(data.current_observation.observation_time));
    $div.append($('<br>'));
    $('#weatherModalBody').append($div);
  }
})();

