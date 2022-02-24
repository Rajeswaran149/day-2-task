// the typeof(1) is number datatype
console.log(typeof(1));
//the typeof 1.1 is number
console.log(typeof(1.1));
//anything under the "" or ''or ``or typeof(typeof(1)) is string.
console.log(typeof('1.1'));
//the typeof true or false is boolean data type
console.log(typeof(true));
//the type tag for objects is 0 and null had 0 type tag.hence it returns object.
console.log(typeof(null));
//the type of undefined and declaredButUndefinedVariable and undeclaredVariable is undefined
console.log(typeof(undefined));
//the type of array returns object
console.log(typeof([]));
//the type of objects returns object
console.log(typeof({}));
//the type of NaN returns number despite being Not-a-Number.
//NaN just means the specific value cannot be represented within the limitations of the numeric type.
//specific NaN is not considered equal to another NaN because the may have different values
console.log(typeof(NaN));