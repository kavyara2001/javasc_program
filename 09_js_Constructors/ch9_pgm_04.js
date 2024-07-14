var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );
var planet1 = new Planet(
    "Earth",
    6,
    "The Earth"
);

planet.showPlanet();
planet1.showPlanet();