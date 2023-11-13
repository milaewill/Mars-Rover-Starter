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