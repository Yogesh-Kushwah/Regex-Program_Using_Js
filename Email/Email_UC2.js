const emailPatternUC2 = /^abc@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailPatternUC2.test("abc@yahoo.com")); // true
console.log(emailPatternUC2.test("abc@gmail.com")); 
console.log(emailPatternUC2.test("abc@xyz.net")); // true
console.log(emailPatternUC2.test("abc@.com")); 
