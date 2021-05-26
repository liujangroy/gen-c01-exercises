
//Generate a random race-number for each runner.
let raceNumber = Math.floor(Math.random() * 1000);
//Assume a runner registered before 10:00a.m.
let registeredEarly = true
//Assume a runner is an adult runner (over 18 years of age)
let runnerAge = 19;
//  Cond' flow: 4 conditions 
// 1)b4 1000 & > 18
// 2)af 1000 & > 18
// 3)< 18
// 4)else

if (registeredEarly && runnerAge > 18){
  raceNumber += 1000;
  console.log(`Participant will start racing at 09:30a.m. with the following assigned number: ${raceNumber}.`)

} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Runner is over 18 AND did not register early, participant will start racing at 11:00am with the following assigned number: ${raceNumber}.`);

} else if (runnerAge < 18) {
  console.log(`Youth registrant will start running at 12:30 pm with the following assigned number: ${raceNumber}.`);

} else (runnerAge == 18) {
  console.log("Please approach the registration desk. Thank you!");
}

