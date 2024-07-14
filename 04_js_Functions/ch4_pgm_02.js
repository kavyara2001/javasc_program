var movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
  };
  
  var movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
  };
  
  var movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
  };
  
  var movie4 = {
    title: "The Martian",
    actors: "Leonardo DiCaprio, Jessica Chastain",
    directors: "Christopher Nolan"
  };
  
  function displayMovieInfo(movie) {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("-------------------------------"); 
  }
  
  displayMovieInfo(movie1);
  displayMovieInfo(movie2);
  displayMovieInfo(movie3);
  displayMovieInfo(movie4);
  
  // Calendar events
  var event1 = {
    title: "Team Meeting",
    date:"2024-06-17",
    time: "10:00 AM",
    location: " National Conference Room A"
  };
  
  var event2 = {
    title: "Lunch with Client",
    date: "2024-06-17",
    time: "1:30 PM",
    location: "Hot Cafe"
  };
  
  var event3 = {
    title: "Project Deadline",
    date: "2024-06-17",
    time: "5:55 PM",
    location: "Office"
  };
  
  function displayEventInfo(event) {
    console.log("Event: " + event.title);
    console.log("------------------------------");
    console.log("Date: " + event.date);
    console.log("Time: " + event.time);
    console.log("Location: " + event.location);
    console.log("\n"); // Adding an extra newline for spacing
  }
  
  displayEventInfo(event1);
  displayEventInfo(event2);
  displayEventInfo(event3);