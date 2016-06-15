// Constructor
function Ticket (movieName, age, time) {
this.movieTitle = movieName;
this.age = age;
this.movieTime = time;
}

Ticket.prototype.getCost = function () {
var price = 20;
if (this.age ===  "seniors" || this.age === "students") {
  price -= 10;
}
if (this.movieTime === "first-time") {
  price -= 5;
}
if (this.movieTime=== "second-time" || this.movieTime === "third-time") {
  price -= 3;
} else if (this.movieTime === "fourth-time") {
  price += 2;
}
return price;
}


//User Interface Logic
$(document).ready(function() {
  $("form#movie-tickets").submit(function(event) {
    event.preventDefault();
    //debugger;
    var movieName = $("select#movieTitle").val();
    var age = $("select#age").val();
    var time = $("select#movieTime").val();

    var newTicket = new Ticket(movieName,age,time); //Call the constructor
    var ticketPrice = newTicket.getCost();

    $("#cost").show();
    $("#final-cost").text(ticketPrice);


  });
});
