const DOMAIN_LIST = ['.com.vn', '.com', '.vn'];

function countEmails(str) {
  //validate
  if (typeof str !== 'string' || str.length === 0) return 0;

  //process
  const splitString = str.split(' ');
  const filterSplitString = splitString.filter((word) => word.includes('@')); // fliter splitstring have element include '@'
  let count = 0;

  filterSplitString.forEach((email) => {
    if (checkDomainAtTheEnd(email, DOMAIN_LIST) && checkLengthValidAndOnly(email, DOMAIN_LIST))
      count++;
  });

  return count;
}

function checkDomainAtTheEnd(email, domainList) {
  for (let index = 0; index < domainList.length; index++) {
    if (email.endsWith(domainList[index])) {
      return true;
    }
  }

  return false;
}

function checkLengthValidAndOnly(email, domainList) {
  // Have only @ in one email
  if (email.indexOf('@') !== email.lastIndexOf('@')) return false;

  // Check length X@Y
  const idx = email.indexOf('@');

  // With X < 3
  const x = email.slice(0, idx);
  if (x.length < 3) return false;

  //With Y < 3 (not include length domain)
  let y = email.slice(idx + 1); //Y include domain

  // domainList.forEach((element) => {
  //   if (y.includes(element)) y.replace(element, '');
  // }); //replace domain to empty

  for (let index = 0; index < domainList.length; index++) {
    if (y.includes(domainList[index])) {
      y = y.replace(domainList[index], '');
      break;
    }
  }
  console.log(y);
  if (y.length < 3) return false;

  return true;
}

console.log(
  countEmails(
    'Hi, nice to meet you, I have two emails are pmnguyen@a.com.git.vn.com and another is minhn.comguyen1032@yahoo.github.com.vn'
  )
);
