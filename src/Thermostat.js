'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
  this.LOW_USAGE_THRESHOLD = 18;
  this.MID_USAGE_THRESHOLD = 25;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.setPowerSavingMode = function(trueOrFalse) {
  this.powerSavingMode = trueOrFalse;
};

Thermostat.prototype.up = function(number = 1) {
  var RELEVANT_MAX = this.powerSavingMode ? this.MAXIMUM_TEMPERATURE_PSM_ON : this.MAXIMUM_TEMPERATURE_PSM_OFF;
  if (this.temperature + number < RELEVANT_MAX) {
    this.temperature += number;
  } else {
    this.temperature = RELEVANT_MAX;
  }
};

Thermostat.prototype.down = function(number = 1) {
  if (this.temperature - number > this.MINIMUM_TEMPERATURE) {
    this.temperature -= number;
  } else {
    this.temperature = this.MINIMUM_TEMPERATURE;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.LOW_USAGE_THRESHOLD) {
    return "low-usage";
  } else if (this.temperature < this.MID_USAGE_THRESHOLD) {
    return "medium-usage";
  } else {
    return "high-usage";
  }

};
