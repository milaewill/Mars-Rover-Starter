const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {

    //this test checks that attempting to creatw a new instance of the message class without providing the required 
    //parameters results in an error being throw. the expected error messafe is 'name required' indicating that the 
    //constructor requires a name parameter
    it("throws error if a command type is NOT passed into the constructor as the first parameter", function () {
        expect(() => { new Message(); }).toThrow(new Error('Name Required'));
    });

    //this test ensures that when a new message instance is created with a specifies name and an array of 'command' instances,
    // the 'name' property of the created instance is set to the provided name
    it("constructor sets name", () => {
        const commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command('STATUS_CHECK')];
        const message = new Message('Test message with two commands', commands);
        expect(message.name).toBe('Test message with two commands');
    });

    // this test verifies that the commands property of the message instance is equal to the array of command 
    //instances passed as the second argument to the constructor
    it("contains a command array passed into the constructor as the 2nd argument", function () {
        const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        const message = new Message('Test message with two commands', commands);
        expect(message.commands).toEqual(commands);
    });

});
