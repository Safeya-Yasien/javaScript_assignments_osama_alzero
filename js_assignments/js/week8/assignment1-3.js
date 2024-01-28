function ageInTime(theAge) {
  // Your Code Here
  let month, weeks, days, hours, minutes, seconds;

  if (theAge < 10 || theAge > 100) {
    return "The Age Out Of Range";
    return;
  } else {
    month = theAge * 12;
    weeks = theAge * 52;
    days = theAge * 365;
    hours = theAge * 365 * 24;
    minutes = theAge * 365 * 24 * 60;
    seconds = theAge * 365 * 24 * 60 * 60;
  }

  // Months: 456 months
  // Weeks: 1,976 weeks
  // Days: 13,870 days
  // Hours: 332,880 hours
  // Minutes: 19,972,800 minutes
  // Seconds: 1,198,368,000 seconds

  return `${month}`;
  //   return `${weeks}`;
  //   return `${days}`;
  //   return `${hours}`;
  //   return `${minutes}`;
  //   return `${seconds}`;
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
