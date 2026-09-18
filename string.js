// String - collection of charter,Sequance of charter immutable data type 

let str = 'sameer'
let name = "sameer"
let naam = ` sam e e r `

console.log(str,name,naam);

console.log(str.charAt(0));
console.log(str[0]);
console.log(str.at(0));

console.log(str.charAt(-2));
console.log(str[-3]);
console.log(str.at(-2));


for (let index = 0; index < naam.length; index++) {
    console.log(naam[index]);
}

console.log(naam.search('a'));

let nstr = str;
console.log(str);

console.log(nstr);
nstr = nstr.concat(naam,name)

console.log(nstr);

// let ch = prompt("Enter your string")
// if (ch.startsWith('www')) {
//     document.write(`${ch} `)
// }else if(ch.endsWith('@gmail.com')){
//     console.log(ch);
    
// }else{
//     console.log("lol");
    
// }

console.log(naam.toUpperCase());
console.log(naam.toLowerCase());
console.log(naam.toLocaleLowerCase());
console.log(naam.toLocaleUpperCase());

console.log(naam.substring(0,2));
console.log(naam.substr(0,2));
console.log(naam.slice(5));
console.log(naam.repeat(5));
console.log(naam.replace('', ' '));
console.log(naam.replaceAll(' ', ''));
console.log(naam.split('').reverse().join(""));
console.log(naam.trim());



// Object

let obj = {
    name : 'sameer',
    age : 21,
    city : 'roorkee'

};

let obj1 = {}
obj1.naam = 'shamir'
obj1.age = 21;

let emp = new Object()
emp.naam = 'sammer'

console.log(obj,obj1,emp);
