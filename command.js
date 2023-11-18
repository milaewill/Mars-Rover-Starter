class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }

}

module.exports = Command;

 // command class has an instructor that takes two parameters command type and value
 // checks for command type, otherwise throws an error
 //initializes properties command type and value of the command instance
 //the value properrty is optional 