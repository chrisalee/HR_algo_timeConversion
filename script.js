/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const timeConversion = (s) => {
  let pattern = /(\d+):(\d+):(\d+)(.+)/;
  let [_, hrs, mins, secs, ampm] = s.match(pattern);
  if(ampm === 'AM') {
    if(hrs === '12') {
      hrs = '00'
    }
  } else {
    if(hrs !== '12') {
      hrs = parseInt(hrs) + 12;
    }
  }
  let time = hrs + ':' + mins + ':' + secs;
  return time;
}


////////////////////////////////////////////////////////////////////////////////////////
const timeConversion = (string) => {
    let hours = parseInt(string.slice(0, 2));
    let remainingTime = string.slice(2, string.length - 2);
    
    if(string[8] === "P") {
        if(hours === 12) {
            hours = "12";
        } else {
            hours = String(hours + 12);
        }
        return hours.concat(remainingTime);
    } else if(hours === 12 && string[8] === "A") {
        hours = "00";
        return hours.concat(remainingTime);
    }
    else {
        hours = string.slice(0, 2);
        console.log('*****', hours.concat(remainingTime))
        return hours.concat(remainingTime)
    }
}
