const DOMAIN = ['.com', '.vn', '.com.vn'];

function findFirstEmail(strList) {
  //validate args
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  if (strList.some((email) => typeof email !== 'string')) return undefined;

  //process
  const filterStrList = strList.filter((email) => email.includes('@'));

  return filterStrList.find((email) => {
    if (email.indexOf('@') !== email.lastIndexOf('@')) return false;

    if (email.endsWith('@') || email.startsWith('@')) return false;
    console.log('1');
    for (let index = 0; index < DOMAIN.length; index++) {
      if (email.endsWith(DOMAIN[index])) break;

      if (index === DOMAIN.length - 1) return false;
    }
    console.log('2');
    const elementEmail = email.split('@');
    const x = elementEmail[0];
    let y = elementEmail[1];

    if (x.length < 3) return false;

    for (let index = 0; index < DOMAIN.length; index++) {
      if (email.includes(DOMAIN[index])) {
        y = y.replace(DOMAIN[index], '');
        break;
      }
    }

    if (y.length < 3) return false;

    return true;
  });
}

console.log(findFirstEmail(['abc@gmail.com.git.vn']));
