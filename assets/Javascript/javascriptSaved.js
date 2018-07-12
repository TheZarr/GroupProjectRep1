
  $(document).ready(function(){
    // var userName = localStorage.getItem('userName');
    // var userEmail = localStorage.getItem('userEmail');
    // $("#whatsUp").text("Hey " + userName + ", here's what you have saved so far!");

    var hotelChoices = localStorage.getItem("hotels");
    var parsedHotels = JSON.parse(hotelChoices);
    var userHotel = "";
    console.log(hotelChoices);
    console.log(parsedHotels);
    for (var i = 0; i< parsedHotels.length;i++){
    userHotel = $("<a>");
    userHotel.text(parsedHotels[i].name);
    userHotel.attr("href", parsedHotels[i].url);
    $("#savedHotel").append(userHotel);
    $("#savedHotel").append("<br>");
    }

    
    var restChoices = localStorage.getItem("restaurants");
    var parsedRests = JSON.parse(restChoices);
    var userRest = "";

    for (var i = 0; i< parsedRests.length;i++){
    userRest = $("<a>");
    userRest.text(parsedRests[i].name);
    userRest.attr("href", parsedRests[i].url);
    $("#savedRest").append(userRest);
    $("#savedRest").append("<br>");
    }
    console.log(parsedRests)
    console.log(restChoices);
    

    var eventChoices = localStorage.getItem("events");
    var parsedEvents = JSON.parse(eventChoices);
    var userEvent = "";

    for (var i = 0; i< parsedEvents.length;i++){
    userEvent = $("<a>");
    userEvent.text(parsedEvents[i].title);
    userEvent.attr("href", parsedEvents[i].url);
    $("#savedEvent").append(userEvent);
    $("#savedEvent").append("<br>");
   }
    console.log(eventChoices);
    console.log(parsedEvents);





  })