var myAge = 21; // Initial human age 

var earlyYears = 2; // First 2 years of a dog
earlyYears *= (10.5);  // first 2 years in human age

var laterYears = myAge - 2; // Later years of a dog
laterYears *= 4; // Later years of a dog in human age

console.log(`earlyYears = ${earlyYears}; laterYears = ${laterYears}.`);

//Convert Dog age into Human age.
var myAgeInDogYears = earlyYears + laterYears;

var myName = "Roy"// dog name
myName = myName.toLowerCase(); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);




//line 4/7點解唔洗let?
//幾時要有 "", variable本身尼?
//line 15 點解可以禁寫?