const emailPatternUC3 = /^abc@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailPatternUC3.test("abc@yahoo.com")); 
console.log(emailPatternUC3.test("abc@gmail.com")); 
console.log(emailPatternUC3.test("abc@abc.net")); 
console.log(emailPatternUC3.test("abc@abccom")); 
