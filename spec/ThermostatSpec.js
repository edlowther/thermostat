'use strict';

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe("initial state", function() {
    it('temperature starts at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  })
  describe("up function", function() {
    it("defaults to an increment of one degree", function() {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21)
    });
    it('otherwise increases the temperature by the specified number', function() {
      thermostat.up(3);
      expect(thermostat.getTemperature()).toEqual(23)
    });
    it('won\'t take the temperature above 25 degrees if power_saving_mode is on', function() {
      thermostat.up(6);
      expect(thermostat.getTemperature()).toEqual(25);
    });
    it('can be set to above 25 degrees if power_saving_mode is off', function() {
      thermostat.setPowerSavingMode(false);
      thermostat.up(11);
      expect(thermostat.getTemperature()).toEqual(31);
    });
    it('won\'t take the temperature above 32 degrees if power_saving_mode is off', function() {
      thermostat.setPowerSavingMode(false);
      thermostat.up(13);
      expect(thermostat.getTemperature()).toEqual(32);
    });
  });
  describe("down function", function() {
    it("defaults to an reduction of one degree", function() {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19)
    });
    it('otherwise decreases the temperature by the specified number', function() {
      thermostat.down(8);
      expect(thermostat.getTemperature()).toEqual(12)
    });
    it('won\'t take the temperature below 10 degrees', function() {
      thermostat.down(11);
      expect(thermostat.getTemperature()).toEqual(10)
    });
  })
  describe("power saving mode", function() {
    it("defaults to on", function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
    it('can be turned off', function() {
      thermostat.setPowerSavingMode(false);
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });
    it('can be switched back on', function() {
      thermostat.setPowerSavingMode(false);
      thermostat.setPowerSavingMode(true);
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });
  describe("reset", function() {
    it('takes the thermostat back to 20 degrees', function() {
      thermostat.up(13);
      thermostat.resetTemperature();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });
  describe("energy usage", function() {
    it('reports low energy if the temperature is below 18', function() {
      thermostat.down(3);
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it('reports medium energy if the temperature is 18', function() {
      thermostat.down(2);
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it('reports medium energy if the temperature is 24', function() {
      thermostat.up(4);
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it('reports high energy if the temperature is 25', function() {
      thermostat.up(5);
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
