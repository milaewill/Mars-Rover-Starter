
// the rover class has a constructor that initializes the rovers position, mode (defaulted to normal) and generator watts defaulted to 110)


//recieveMessage method initializes an empty array 
// iterates through each command in the message object
// mode change - update rovers mode and sets to resul.comple to true
//status check - returns the rover status  (m, genwatts, position) and sets resul.comple to true
//move - if normal, updates the rovers position and sets resul. comple to true 
// if low power, sets resul.comple to false 

// returns and object containing the message name and the array of the results 

class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = 'NORMAL'
      this.generatorWatts = 110;
   }
   recieveMessage(message) {
      let results = [];
      for (let command of message.commands) {
         let result = {};
         if (command.commandType === "MODE_CHANGE") {
            this.mode = command.value;
            result.completed = true;
         } else if (command.commandType === 'STATUS_CHECK') {
            result.completed = true;
            result.roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position,
            }
         } else if (command.commandType === 'MOVE') {
            if (this.mode === 'NORMAL') {
               result.completed = true;
               this.position = command.value;

            } else if (this.mode === 'LOW_POWER') {
               result.completed = false;


            }
         }
         results.push(result)

      }
      return {
         message: message.name,
         results: results
      }
   }
}

module.exports = Rover;