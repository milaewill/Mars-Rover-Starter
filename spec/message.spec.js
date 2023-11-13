const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {

    it("throws error if a command type is NOT passed into the constructor as the first parameter", function () {
        expect(() => { new Message(); }).toThrow(new Error('Name Required'));
    });

    it("constructor sets name", () => {
        const commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command('STATUS_CHECK')];
        const message = new Message('Test message with two commands', commands);
        expect(message.name).toBe('Test message with two commands');
    });

    it("contains a command array passed into the constructor as the 2nd argument", function () {
        const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        const message = new Message('Test message with two commands', commands);
        expect(message.commands).toBe(commands);
    });

});
