describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  it('increases the temperature with an up function', function() {
    thermostat.up(3);
    expect(thermostat.temperature()).toEqual(23)
  });
  it('has a maximimum temperature of 25 degrees if power_saving_mode is on', function() {
    thermostat.up(6);
    expect(thermostat.temperature()).toEqual(25);
  })
  it('can be set to above 25 degrees if power_saving_mode is off', function() {
    thermostat.set_power_saving_mode(false);
    thermostat.up(11);
    expect(thermostat.temperature()).toEqual(31);
  })
  it('has a maximimum temperature of 32 degrees if power_saving_mode is off', function() {
    thermostat.set_power_saving_mode(false);
    thermostat.up(13);
    expect(thermostat.temperature()).toEqual(32);
  })
  it('decreases the temperature with a down function', function() {
    thermostat.down(8);
    expect(thermostat.temperature()).toEqual(12)
  });
  it('has a minimum temperature of 10 degrees', function() {
    thermostat.down(11);
    expect(thermostat.temperature()).toEqual(10)
  });
  it('has a power saving mode that defaults to on', function() {
    expect(thermostat.power_saving_mode()).toEqual(true);
  });
  it('has a way to turn power saving mode off', function() {
    thermostat.set_power_saving_mode(false);
    expect(thermostat.power_saving_mode()).toEqual(false);
  })
  it('power saving mode off can be switched back on', function() {
    thermostat.set_power_saving_mode(false);
    thermostat.set_power_saving_mode(true);
    expect(thermostat.power_saving_mode()).toEqual(true);
  })
  it('can be reset to 20 degrees', function() {
    thermostat.up(13);
    thermostat.reset_temperature();
    expect(thermostat.temperature()).toEqual(20);
  })
  it('claims to be low energy if the temperature is below 18', function() {
    thermostat.down(3);
    expect(thermostat.energy_usage()).toEqual("low-usage");
  })
  it('claims to be medium energy if the temperature is 18', function() {
    thermostat.down(2);
    expect(thermostat.energy_usage()).toEqual("medium-usage");
  })
  it('claims to be medium energy if the temperature is 24', function() {
    thermostat.up(4);
    expect(thermostat.energy_usage()).toEqual("medium-usage");
  })
  it('claims to be high energy if the temperature is 25', function() {
    thermostat.up(5);
    expect(thermostat.energy_usage()).toEqual("high-usage");
  })

});
