class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

  }

  start() {
    // ... your code goes here
    //use of setInterval method. The interval id should be assigned to our intervalID. 
    //The start method should accept a function as an argument called callback. 
    this.intervalId = setInterval((callback) =>{
    console.log(this.currentTime);
     
    this.currentTime ++;

     if (this.currentTime > 3) {
     this.intervalId = setInterval(callback, 3000)
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    // should return the minutes passed as integer
    var minutes = Math.floor (this.intervalId/60000);
      return minutes;
  }

  getSeconds() {
    // ... your code goes here
    var seconds = (( this.currentTime % 60000)/1000);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value ){
  return JSON.stringify (value);
}else{
  return `0${value}`;
}
  }

  stop() {
    // ... your code goes here
    if (this.currentTime >= this.intervalId) {
    clearInterval(this.intervalId)
  } else{
    clearInterval(this.currentTime);
  }

  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minute = getMinutes();
    let second = getSeconds();
    if (minute = 0){
     return minute.split ('0${minute}:0${second}');
    }else{
     return second.split ('0${minute}:0${second}');
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
