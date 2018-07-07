var destination = "Atlanta";
var startDate = "20180901";
var endDate = "20180905";
var startDateFormatted = "20180901";
var endDateFormatted = "20180905";

$("#user-submit").on('click', function (event) {
  event.preventDefault()

  //grab user inputs and set local variables
  destination = $("#travelDestinationInput").val().trim();
  startDate = $("#startDateInput").val().trim();
  endDate = $("#endDateInput").val().trim();
  // console.log(destination);
  // console.log(startDate);
  // console.log(endDate);

  startDateFormatted = moment(startDate).format("YYYYMMDD");
  endDateFormatted = moment(endDate).format("YYYYMMDD");
  // console.log(startDateFormatted);
  // console.log(endDateFormatted);
 
})

eventCall();
yelpCallHotel();
yelpCallRest();

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
        var event = $("<p>");
        var e = $("<a>");
        var time = response.events.event[i].start_time;
        timeArray = time.split(" ");
        var date = moment(timeArray[0]).format("MM-DD");
        var startTime = moment(timeArray[1], "HH:mm:ss").format("h:mm a");
        
        console.log(date);
        console.log(startTime);
        console.log(timeArray);
        // console.log(time);
        e.text(response.events.event[i].title);
        e.addClass("card-text");
        e.attr("href", response.events.event[i].url);
        event.append(e);
        event.append("- " + date + " " + startTime);
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
  
  var hotelQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotels&location=Atlanta" //businesses/search?term=restaurants&destination=" + destination + "&API_KEY=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
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
        var item = $("<p>");
        var e = $("<a>");
        e.text(response.businesses[i].name);
        e.addClass("card-text");
        e.attr("href", response.businesses[i].url);
        item.append(e);
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
  
  var restQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Atlanta" //businesses/search?term=restaurants&destination=" + destination + "&API_KEY=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
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
        var item = $("<p>");
        var e = $("<a>");
        e.text(response.businesses[i].name);
        e.addClass("card-text");
        e.attr("href", response.businesses[i].url);
        item.append(e);
        $("#restaurants").append(item);
        }
    }).catch(function (err) {
      console.log(err);
    });
}



