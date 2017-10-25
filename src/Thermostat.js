
function Thermostat() {
  this._MINIMUM_TEMPERATURE = 10
  this._temperature = 20;
}

Thermostat.prototype.temperature = function(){
  return this._temperature
};

Thermostat.prototype.up = function(number) {
  this._temperature += number
};

Thermostat.prototype.down = function(number) {
  if((this._temperature - number) > this._MINIMUM_TEMPERATURE){
  this._temperature -= number;
}else{
  this._temperature = this._MINIMUM_TEMPERATURE;
}
};
