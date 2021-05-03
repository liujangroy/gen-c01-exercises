
const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 10;
    case 'Sunday':
      return 10;

    default:
      console.error('Wrong value!');
      return false;
  }
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getActualSleepHours = () => {
  const result = days.map(item => getSleepHours(item));
  return result.reduce((acc, curr) => acc + curr);
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const idealSleepHours = getIdealSleepHours();
  const actualSleepHours = getActualSleepHours();

  if (idealSleepHours === actualSleepHours) {
    console.log('Perfect');
  } else if (idealSleepHours < actualSleepHours) {
    console.log('You sleep more!');
  } else if (idealSleepHours > actualSleepHours) {
    console.log('You sleep less!');
  } else {
    console.error('Error!');
  }
};
calculateSleepDebt();

// console.clear();

let hours = [8, 6, 'bla', 5, 'hello', 8, 9, 10, 4, 3];
let needsHours = 56;

const getSleepHoursArr = hours => {
  hours = hours.filter(num => !isNaN(num) && typeof num === 'number');
  hours = hours.length > 6 ? hours.slice(0, 7) : hours;
  console.log(hours);

  const sleepTime = hours.reduce((acc, curr) => acc + curr);
  console.log(sleepTime);

  const difference = needsHours - sleepTime;
  console.log(`Your sleep debt is ${difference} hours`);

  return `Your sleep debt is ${difference}`;
};

getSleepHoursArr(hours);
