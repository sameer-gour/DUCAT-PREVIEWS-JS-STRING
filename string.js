// String - collection of charter,Sequance of charter immutable data type 

let str = 'sameer'
let name = "sameer"
let naam = `sameer`

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

let ch = prompt("Enter your string")
if (ch.startsWith('www')) {
    document.write(`${ch} `)
}else if(ch.endsWith('@gmail.com')){
    console.log(ch);
    
}else{
    console.log("lol");
    
}
