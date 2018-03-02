
var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < arr.length; i++) {
  myUrl = "https://wind-bow.glitch.me/twitch-api/channels/" + arr[i] + "?callback=?";
  $.getJSON(myUrl, function(data) {
    
  var item = [data.logo, data.display_name, data.status, data.url];

  if(data.logo == null && data.logo == undefined) {
  data.logo = "https://www.jainsusa.com/images/store/landscape/not-available.jpg";
  
  }
     if (data.status == null && data.status == undefined) {
      var offline = '<div class="row space" ><div class="col-sm"><img class="rounded-circle" src=' + data.logo + '></div>';
      offline += '<div class="col-sm"><p>' + data.display_name + '</p></div>';
      offline += '<div class="col-8"><p>offline</p></div></div>';
      $("#off").append(offline);  
    }
    else {
    var html = '<div class="row space"><div class="col"><img class="rounded-circle" src=' + data.logo + ' ></div>';
      html += '<div class="col"><p>' + data.display_name + '</p></div>';
      html += '<div class="col-8"><a href=' + data.url + '>' + data.status + '</a></div></div>';
      $("#on").append(html);   
    }
  })
}
//action buttons
$("#online").on("click", function(){
  $("#off").hide();
  $(".all").hide();
  $("#on").show();
})

$("#offline").on("click", function(){
  $("#on").hide();
  $(".all").hide();
  $("#off").show();
})

$("#all").on("click", function(){
  $("#on").show();
  $("#off").show();
})

