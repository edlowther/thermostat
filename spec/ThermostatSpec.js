describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  it('increases the temperature with an up function', function() {
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30)
  });
  it('decreases the temperature with a down function', function() {
    thermostat.down(8);
    expect(thermostat.temperature()).toEqual(12)
  });
  it('has a minimum temperature of 10 degrees', function() {
    thermostat.down(11);
    expect(thermostat.temperature()).toEqual(10)
  });

});
