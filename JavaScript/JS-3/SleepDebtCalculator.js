const getSleepHours = day => {
  switch(day) {
    case "Monday":
      return 8;
  
    case "Tuesday":
      return 6;
  
    case "Wednesday":
      return 7;
  
    case "Thursday":
      return 7;
  
    case "Friday":
      return 7;
  
    case "Saturday":
      return 10;
  
    case "Sunday":
      return 11;
  
    default:
      return "N/A";
    };
  };
  console.log(getSleepHours("Monday"))
  
  /*
    if (day === "Monday") {
      return 8;
    } else if 
    (day === "Tuesday") {
      return 7;
    } else if
    (day === "Wednesday"){
      return 5
    } else if 
    (day==="Thursday"){
      return 8
    } else if 
    (day==="Friday"){
      return 6
    }else if 
    (day==="Saturday"){
      return 10
    }else if 
    (day==="Sunday"){
      return 6
    } else {
      return "Error!"
    }
    };*/
  
  const getActualSleepHours = () => 
    getSleepHours('Monday')+
    getSleepHours('Tuesday')+
    getSleepHours("Wednesday")+
    getSleepHours("Thursday")+
    getSleepHours("Friday")+
    getSleepHours("Saturday")+
    getSleepHours("Sunday");
  
    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours*7;
    };
  
    console.log(getActualSleepHours() );
    console.log(getIdealSleepHours() );
  
    const calculateSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours();
      let sleepHoursDifference = Math.abs(actualSleepHours - idealSleepHours);
  
      if (actualSleepHours === idealSleepHours ) {
        console.log("You got the perfect amount of sleep, keep it up!");
      } else if (actualSleepHours > idealSleepHours) {
        console.log(`You sleep more than you needed. 
        You should sleep ${sleepHoursDifference} hours less`);
      } else if (actualSleepHours < idealSleepHours){  
        console.log(`You got ${sleepHoursDifference} hours less sleep than you needed this week. Please adjust and keep a consistent sleep schedule of 8 hours per day.`);
      } else {
        console.log("Error input. Please make sure you type in the number");
      }
  
    };
     calculateSleepDebt();
  
  
  
  
  