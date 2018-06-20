const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocationArray = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return startLocationArray;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocationArray = this.journeys.map((journey) => {
    return this.journeys.endLocation;
  })
  return endLocationArray;
};

Traveller.prototype.getModesOfTransport = function () {
  const transportArray = this.journeys.map((transport) => {
    return this.journeys.transport;
  })
  return transportArray;

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
