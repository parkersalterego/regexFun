// slash notation
let reSlash = /^matchthis$/i;

// constructor notation
let reConstructor = new RegExp("^matchthis$", "i");
// console.log(reConstructor.test("MATCHTHIS")); // works with "i" (case insensitive flag)
// console.log(reConstructor.test("Shouldn't Match"));

// character escapes for regex and matching
// when using special chars they must be escaped using the '\' 
let specialChars = "[({})]\\^$.|?*+";
let reMatchTheSpecialChars = /\[\(\{\}\)\]\\\^\$\.\|\?\*\+/
// console.log(reMatchTheSpecialChars.test(specialChars));

// validating
let phoneNumber = "+46-702-11 12 13";
let isValidNumber = phoneNumber.match(/^[\+\d\-\s]+$/);
// console.log(`${phoneNumber} is ${isValidNumber ? 'valid' : 'INVALID'}`);

// extracting 
let text = "Adam is writing code. Adam is learning regex. Adam likes regex."
let extractAdam = text.match(/adam/gi);
// console.log(extractAdam);
// console.log(`${extractAdam.length} occurances of Adam in "${text}"`);

// replacement
let replaceAdam = text.replace(/adam/gi, "John");
// console.log(replaceAdam);

let evalText = "this is some text and I want to find out what char is used the most";
console.log(evalText.match(/[a-z]/gi));

let extractDay = "schedule a meeting for monday at 3pm";
console.log(extractDay.match(/monday|tuesday|wednesday|thursday|friday|saturday|sunday/gi));

