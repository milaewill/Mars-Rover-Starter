const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function () {

  // 7 tests here!

  //test 7 
  //this text case aims to confirm that the rover class costructor initializes a rover with a s
  //pecified starting position '100' and the default values for mode 'normal' and generatorWatts '110'. 
  //It helps to ensure that the rover is in the expected state after instatiantion , providing a baseline
  // for further testing and the usage of the rover class
  it("constructor sets position and default values for mode and generatorWatts", function () {
    const rover = new Rover(100); //position
    expect(rover.position).toBe(100);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);

  });

  //test 8 
  // this test case checks that the rover class can correctly recieve and process a message object
  //and that the response  it generates includes the name of the original message. this is important 
  //for ensuring that communication between the rover and the messages is functioning as expected
  it("response returned by receiveMessage contains the name of the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOWPOWER'), new Command('STATUS_CHECK')];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message);
    expect(response.message).toBe('Test message with two commands');

  });

  //test 9 
  // this test case ensures that the rover class can correctly handle a message 
  //object with the multiple commands, resulting in a response with the expected number of results.
  // it is essential for validating that the rover can process and respond to multiple commands within a single message appropriately
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command('MODE_CHANGE', 'LOWPOWER'), new Command('STATUS_CHECK')];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message);
    expect(response.results.length).toBe(2);


  });


  // test 10
  //this test case ensures that the rover class correctly responds to a 'statuscheck' command by providing 
  //the expected status information in the response. its helps validate that the rover can accurately
  // report its mode, generator watts, and poition when queries with a status check command
  it("responds correctly to the status check command", function () {
    let commands = [new Command('STATUS_CHECK')];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message);
    expect(response.results[0].roverStatus).toEqual({
      mode: 'NORMAL',
      generatorWatts: 110,
      position: 100,
    })
  });

  //test 11
  // this test case validates that the rover class correctly respons to a mode change command with the argument
  // 'low power'. it ensures that the rover;s mode is updated as expected and that the response indicates
  // successful completetion of the command 
  it("responds correctly to a mode check command", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message);
    expect(rover.mode).toBe('LOW_POWER')
    expect(response.results[0].completed).toBe(true)
  });

  //test 12
  // this test case checks that the rover class responds as expected when trying to execute a move
  // command in low power mode. the false completed value in the response indicated that the move 
  //command was not successfully completes, and the rovers position remains unchanged
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 14)];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message)
    expect(response.results[1].completed).toBe(false)
    expect(rover.position).toBe(100)
  });

  //test 13
  // this test case checks that the rover clas responds as expected when executing a move command, 
  //updating the rovers position to the specidfied value. the expectation ensures that the new position
  // is correctly reflected in the rover instance after processing the command,
  it("responds with the position for the move command", function () {
    let commands = [new Command('MOVE', 14)];
    const message = new Message('Test message with two commands', commands);
    const rover = new Rover(100);
    let response = rover.recieveMessage(message)
    expect(rover.position).toBe(14)
  });


});
