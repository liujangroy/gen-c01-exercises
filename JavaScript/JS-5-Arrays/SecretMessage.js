let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


console.log(secretMessage.length);//No of elements
secretMessage.pop();
secretMessage.push("to","Program")
console.log(`step3 ${secretMessage}`);

// secretMessage.splice(23,23,"to","Program");
// console.log(secretMessage);
//alt method

let a = secretMessage.indexOf("easily");//a number 
secretMessage[a] = "right";
console.log(`Step4 ${secretMessage}`);

secretMessage.shift();
secretMessage.unshift("Programming");
console.log(`Step6 ${secretMessage}`);
//secretMessage[0] = "Programming"

secretMessage.splice(6, 5, "know");
console.log(`Step7 ${secretMessage}`);

console.log(`Quote: ${secretMessage.join(' ')}`);
