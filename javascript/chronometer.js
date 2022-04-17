class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilliseconds = 0;
    this.millisecondsIntervalId = 0;


  }

  start(callback, printMilliseconds) {
    // ... your code goes here
    //use of setInterval method. The interval id should be assigned to our intervalID. 
    //The start method should accept a function as an argument called callback. 
    this.intervalId = setInterval(() =>{
    this.currentTime ++;
     if (callback) callback() 
    }, 1000);

    this.millisecondsIntervalId=setInterval(() =>{
       if (this.currentMilliseconds === 99){
         this.currentMilliseconds = 0; 
      }
      this.currentMilliseconds +=1;
      if(printMilliseconds) printMilliseconds();
    },10); 
  }

  getMinutes() {
    // ... your code goes here
    // should return the minutes passed as integer
    let minutes = Math.floor (this.currentTime/60);
      return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
return ("0" + value).slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    clearInterval(this.millisecondsIntervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    // ... your code goes here
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
   let millisecond =this.computeTwoDigitNumber(this.currentMilliseconds);
    
   return `${minute}:${second}:${millisecond}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
