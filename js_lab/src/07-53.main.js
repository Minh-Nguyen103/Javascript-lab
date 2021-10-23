//String exercise
//Write Javascrip function to parameterize a string
//Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'

function parameterize(str) {
  //validate args
  if (typeof str !== 'string') return 'Input not validate';

  //process
  const strLower = str.toLowerCase();
  //Code for node version > 15
  //   const result = strLower.replaceAll(' ', '-');

  //Split and join
  const result = strLower.split(' ').join('-');
  //return
  return result;
}

console.log(parameterize('Code JS Is Fun'));
