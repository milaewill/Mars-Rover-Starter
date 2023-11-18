const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// these tests collectively ensure the command class constructor behaves as expected enforcing
// the requirement of providing a command type and correctly setting the command type 
//and value properties of the created instances


describe("Command class", function () {

  //checks whether attempting to create a new instance of the command class w/o paasing the 
  //command type as the first paramete throws an error with the message 'command type required
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () { new Command(); }).toThrow(new Error('Command type required.'));
  });

  // test ensures that when a new command instance is created with the parameters mode change and
  // low power, the command type property of the resulting object set to mode change
  it("constructor sets command type", () => {
    const command = new Command('MODE_CHANGE', 'LOW_POWER');
    expect(command.commandType).toBe('MODE_CHANGE');
  });

  //similar to 2nd test, this one checks whether the value value property of the command 
  //instance is set to low power when the instance is created with the parameters mode change and low power
  it("constructor sets command value", () => {
    const command = new Command('MODE_CHANGE', 'LOW_POWER');
    expect(command.value).toBe('LOW_POWER');
  });

});