var destination = "";
var startDate = "";
var endDate = "";
var startDateFormatted = "";
var endDateFormatted = "";

// var bodyForm = document.getElementById("body");
// bodyForm.style.display = "hidden";

$("#body").hide();

$("#user-submit").on('click', function (event) {
  event.preventDefault()

  //grab user inputs and set local variables
  destination = $("#travelDestinationInput").val().trim();
  startDate = $("#startDateInput").val().trim();
  endDate = $("#endDateInput").val().trim();
  console.log(destination);
  console.log(startDate);
  console.log(endDate);

  startDateFormatted = moment(startDate).format("YYYYMMDD");
  endDateFormatted = moment(endDate).format("YYYYMMDD");
  console.log(startDateFormatted);
  console.log(endDateFormatted);

  eventCall();
  yelpCallHotel();
  yelpCallRest();

  // var tripForm = document.getElementById("tripForm");

  // tripForm.style.display = "none";

  $("#tripForm").hide();
  $("#body").show();

})


// $("#moreOptions").on('click', function(){



// })


function eventCall() {

  //api key for eventful = pXWvVZ6KKRfSxk4R
  //date format on eventful: &t=2018072100-2018072823 (YYYYMMDD-YYYYMMDD)

  var eventQueryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=pXWvVZ6KKRfSxk4R&category=music,movies_film,fundraisers,art,attractions,singles_social,outdoors_recreation,performing_arts,animals&location=" + destination + "&t=" + startDateFormatted + "00-" + endDateFormatted + "00&page_size=10";

  $.ajax({
    url: eventQueryURL,
    method: "GET"
  })
    .then(function (response) {
      response = JSON.parse(response);
      console.log(response);

      for (var i = 0; i < 10; i++){
        var check = $("<input>", {type: 'checkbox', id: 'event' + i});
        var event = $("<p>");
        var e = $("<a>");
        var eventInfo = $("<p>");
        var time = response.events.event[i].start_time;
        timeArray = time.split(" ");
        var date = moment(timeArray[0]).format("MM-DD");
        var startTime = moment(timeArray[1], "HH:mm:ss").format("h:mm a");
        eventInfo.addClass("info");
        // console.log(date);
        // console.log(startTime);
        // console.log(timeArray);
        // console.log(time);
        e.text(response.events.event[i].title);
        e.addClass("card-text");
        e.attr("href", response.events.event[i].url);
        event.append(e);
        event.prepend(check);
        eventInfo.append("- " + date + " " + startTime);
        event.append(eventInfo);
        $("#events").append(event);
        }

    }).catch(function (err) {
      console.log(err);
    });


}

function yelpCallHotel() {

  //API Call for Yelp
  //api key for yelp = w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx

  //api key for google places = AIzaSyD08e3WuFNHAIkG0DMXEYkaR2f1jaP-iOs
  //https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Atlanta%20hotel&key=AIzaSyD08e3WuFNHAIkG0DMXEYkaR2f1jaP-iOs

  var apiKeyYelp = "w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx"
  
  var hotelQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotels&location=" + destination; //businesses/search?term=restaurants&destination=" + destination + "&API_KEY=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
  $.ajax({
    method: "GET",
    url: hotelQueryURL,
    headers: {
      "Authorization": "Bearer " + apiKeyYelp
    }
  })
    .then(function (response) {
      console.log(response);
      // console.log(response.businesses[0].name);

      for (var i = 0; i < 10; i++){
        var check = $("<input>", {type: 'checkbox', id: 'hotel' + i});
        var item = $("<p>");
        var e = $("<a>");
        var rating = response.businesses[i].rating;
        item.addClass("info");
        e.text(response.businesses[i].name);
        e.addClass("card-text");
        e.attr("href", response.businesses[i].url);
        item.append(e);
        item.prepend(check);
        item.append(rating + "/5 stars");
        $("#hotels").append(item);
        
        }

    }).catch(function (err) {
      console.log(err);
    });
}

function yelpCallRest() {

  //API Call for Yelp
  //api key for yelp = w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx

  //api key for google places = AIzaSyD08e3WuFNHAIkG0DMXEYkaR2f1jaP-iOs
  //https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Atlanta%20hotel&key=AIzaSyD08e3WuFNHAIkG0DMXEYkaR2f1jaP-iOs

  var apiKeyYelp = "w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx"
  
  var restQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=" + destination; //businesses/search?term=restaurants&destination=" + destination + "&API_KEY=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
  $.ajax({
    method: "GET",
    url: restQueryURL,
    headers: {
      "Authorization": "Bearer " + apiKeyYelp
    }
  })
    .then(function (response) {
      console.log(response);

      for (var i = 0; i < 10; i++){
        var check = $("<input>", {type: 'checkbox', id: 'rest' + i});
        var item = $("<p>");
        var e = $("<a>");
        e.text(response.businesses[i].name);
        e.addClass("card-text");
        e.attr("href", response.businesses[i].url);
        item.append(e);
        item.prepend(check);
        $("#restaurants").append(item);
        var restInfo = $("<p>");
        for(var j = 0; j < response.businesses[i].categories.length; j++){
          restInfo.append(response.businesses[i].categories[j].alias + " "); 
        }
        restInfo.addClass("info");
        item.append(restInfo);
        }
    }).catch(function (err) {
      console.log(err);
    });
}