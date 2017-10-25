function Thermostat() {
  this._MINIMUM_TEMPERATURE = 10;
  this._temperature = 20;
  this._power_saving_mode = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.power_saving_mode = function() {
  return this._power_saving_mode;
};

Thermostat.prototype.set_power_saving_mode = function(true_or_false) {
  this._power_saving_mode = true_or_false;
};

Thermostat.prototype._maximum_temperature = function() {
  if (this._power_saving_mode) {
    return 25;
  } else {
    return 32;
  }
};

Thermostat.prototype.up = function(number) {
  if ((this._temperature + number) < this._maximum_temperature()) {
    this._temperature += number;
  } else {
    this._temperature = this._maximum_temperature();
  }
};

Thermostat.prototype.down = function(number) {
  if ((this._temperature - number) > this._MINIMUM_TEMPERATURE) {
    this._temperature -= number;
  } else {
    this._temperature = this._MINIMUM_TEMPERATURE;
  }
};

Thermostat.prototype.reset_temperature = function() {
  this._temperature = 20;
};

Thermostat.prototype.energy_usage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }

};
