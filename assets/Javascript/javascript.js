var destination = "";
var startDate = "";
var endDate = "";


$("#user-submit").on('click', function (event){
event.preventDefault()
console.log("user submission button works");
//API Call for Eventful
//api key for eventful = pXWvVZ6KKRfSxk4R
//date format on eventful: &t=2018072100-2018072823 (YYYYMMDD-YYYYMMDD)

//grab user inputs and set local variables
destination = $("#travelDestinationInput").val().trim();
startDate = $("#startDateInput").val().trim();
endDate = $("#endDateInput").val().trim();

//format dates
var startDateFormatted = moment(startDate).format("YYYY MM DD");
var endDateFormatted = moment(endDate).format("YYYY MM DD");

//http://api.eventful.com/json/events/search?app_key=pXWvVZ6KKRfSxk4R&location=San+Diego&date=2018042500-2018042700
var eventQueryURL = "http://atlanta.eventful.com/events?q=*&ga_search=" + destination + "*&sort_order=Date&within=25&units=mi&t=" + startDateFormatted + "-" + endDateFormatted + "&ga_type=events";

$.ajax({
    url: eventQueryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response);
  });


//API Call for Yelp
//api key for yelp = w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx

var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&destination=" + destination + "&apikey=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
$.ajax({
    url: yelpQueryURL,
    method: "GET"
  })
  .then(function(response) {
        console.log(response);
  });



//API Call for Expedia

// var expediaQueryURL = "";
// $.ajax({
//     url: expediaQueryURL,
//     method: "GET"
//   })
//   .then(function(response) {

//   });
  
})

// // Roating imates for Jumbotron
// var images = ["./assets/images/jumbotron_1.jpg", "./assets/images/jumbotron_2.jpg", "./assets/images/jumbotron_3.jpg", "./assets/images/jumbotron_4.jpg", "./assets/images/jumbotron_5.jpg", "./assets/images/jumbotron_6.jpg", "./assets/images/jumbotron_7.jpg", "./assets/images/jumbotron_8.jpg", "./assets/images/jumbotron_9.jpg", "./assets/images/jumbotron_10.jpg"];
// nextImage = 0;

// setInterval(function () {
//  if (nextImage === images.length) {
//    nextImage = 0
//  }
//  console.log(images[nextImage]);
//  $("#jumboPic").attr("src", images[nextImage])//instead of changing the src of the img in the html change the src of the image on the css for the jumbotro class  google jquery change css styling
//  nextImage++;
// }, 5000)