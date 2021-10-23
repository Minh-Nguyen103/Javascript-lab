//Capitalize
// Write function to transform a stirng:
//- The first letter in UPPERCASE
//- The rest in lowercase
//Eg: capitalize('nguyên công nghệ')

function capitalize(str) {
  //validate args
  if (typeof str !== 'string') return 'Input not validate';

  //process
  const firstUppercase = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  const result = `${firstUppercase}${rest}`;

  //return
  return result;
}

//Test
console.log(capitalize(nguyên));
