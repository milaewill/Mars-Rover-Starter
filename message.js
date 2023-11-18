class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error("Name Required");
      }
      this.commands = commands;
   }
}

module.exports = Message;

// the message class has a constructor that takes two parameters - name and commands
// checks for name parameter , otherwise throws an error 
//initializes the name and commands property of the message instance
