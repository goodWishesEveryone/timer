// An alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// Example usage:

// node timer1.js 10 3 5 15 9
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds


let args = process.argv.slice(2);

// If no numbers are provided, it should just not beep at all and end immediately since no beeps should get scheduled.
if (args.length >= 1) {

  for (let alarmNum of args) {
    // Ignore/skip an input that is not a number, instead of attempting to call setTimeout with a non-number.
    let alarmNumOnly = Number(alarmNum);
    // Ignore/skip any numbers that are negative. We can't schedule anything in the past.
    if (alarmNumOnly > 0) {
      setTimeout(() => {
        // System Sound (Beep / Ding)
        // process.stdout.write("\x07");
        process.stdout.write(".");
      }, alarmNum * 1000);
    }
  }
}
