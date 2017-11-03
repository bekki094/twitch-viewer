$(document).ready(function(){ 
        
  $.ajax({
   type: 'GET',
   url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
   dataType: 'jsonp',
   success: function (data) {
     
      if (data.stream == null) {
        let status = $('<p></p>').text('offline');
        $("#freecodecamp").append(status);
        $('#freecodecamp').addClass('offline');
      }
     else {
       let status = $('<p></p>').text('online');
       $("#freecodecamp").append(status);
       $('#freecodecamp').addClass('online');
      
     }
     console.log(data);
   }
     
 });
  
  $.ajax({
   type: 'GET',
   url: 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?',
   dataType: 'jsonp',
   success: function (data) { 
     
      if (data.stream == null) {
        let status = $('<p></p>').text('offline');
        $("#ESLSC2").append(status);
        $('#ESLSC2').addClass('offline');
      }
     else {
       let status = $('<p></p>').text('online');
       $("#ESLSC2").append(status);
        $('#ESLSC2').addClass('online');
     }
     
   }
     
 });
  
  $.ajax({
   type: 'GET',
   url: 'https://wind-bow.gomix.me/twitch-api/streams/storbeck?callback=?',
   dataType: 'jsonp',
   success: function (data) {
     
      if (data.stream == null) {
        let status = $('<p></p>').text('offline');
        $("#storbeck").append(status);
        $('#storbeck').addClass('offline');
      }
     else {
       let status = $('<p></p>').text('online');
       $("#storbeck").append(status);
       $('#storbeck').addClass('online');
     }
     
   }
           
  });
  
   $('#online').click(function(){
          
     $('#online').addClass('active');
     $('#offline').removeClass('active');
     $('#all').removeClass('active');
     $('.offline').hide();
     $('.online').show();
 });
   
  $('#offline').click(function(){
          
     $('#offline').addClass('active');
    $('#online').removeClass('active');
     $('#all').removeClass('active');
     $('.offline').show();
     $('.online').hide();
 });
  
  $('#all').click(function(){
          
     $('#all').addClass('active');
    $('#offline').removeClass('active');
     $('#online').removeClass('active');
     $('.offline').show();
     $('.online').show();
 });
  
  
  
});