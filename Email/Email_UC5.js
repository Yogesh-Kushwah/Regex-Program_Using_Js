const emailPatternUC5 = /^abc([._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2})?$/;

console.log(emailPatternUC5.test("abc@yahoo.com")); // true
console.log(emailPatternUC5.test("abc.100@gmail.com")); // true
console.log(emailPatternUC5.test("abc.xyz@abc.co.in")); 
console.log(emailPatternUC5.test("abc+100@abc.com.au"));
console.log(emailPatternUC5.test("abc@gmail.com.1a")); 
console.log(emailPatternUC5.test("abc@gmail.com.aa.au")); 
