const names='juliet'
console.log(names.length)
// interpolation
console.log('my names is' +names);
console.log(`my name is ${names}`)
const string='test';
const string2=`something ${string}`;
console.log('something' +string)
console.log(string2)
// concatinaton
let a='hello';
let b='mary';
results=a.concat('',b);
console.log(results)
// string length
const one='i love rain';
console.log(one.length)
// string replace
console.log(one.replace('i love rain','i hate rain'))
console.log(one.replace([2],"a"))
// // indexOf
console.log(one.indexOf('rain'));
// // last index
console.log(one.lastIndexOf('love'))
// // start with(checks whether it starts with rain)
console.log(one.startsWith('rain'))
console.log(one.startsWith('i'))
// // endswith
console.log(one.endsWith('rain'))
console.log(one.endsWith('love'))

// // upperCase
console.log(one.toUpperCase())

// // lowercase
console.log(one.toLowerCase())
// // string include:checks if one string can be found inside another
console.log(one.includes('rain'))
console.log(one.includes('some'))
// // repeat
console.log(one.repeat(3))
// // charAt:returns the character at a specified index
console.log(one.charAt(7))
// // charCodeAt

