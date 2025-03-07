const emailPatternUC4 = /^abc([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailPatternUC4.test("abc@yahoo.com")); 
console.log(emailPatternUC4.test("abc.100@gmail.com")); 
console.log(emailPatternUC4.test("abc-xyz@abc.net")); 
console.log(emailPatternUC4.test("abc$xyz@abc.com")); 
