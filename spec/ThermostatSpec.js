describe("Thermostat", function() {
  var thermostat = new Thermostat();
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });
  it('increases the temperature with an up function', function() {
    thermostat.up(10);
    expect(thermostat.temperature()).toEqual(30)
  });

});
