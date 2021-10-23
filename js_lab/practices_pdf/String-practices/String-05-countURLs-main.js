const PROTOCOL_LIST = ['http', 'https', 'ws', 'wss,githubbbbb'];
const DOMAIN_LIST = ['.com', '.vn', '.com.vn'];
const SIGN = '://';

function countURLs(str) {
  //validate
  if (typeof str !== 'string' || str.length === 0) return 0;

  //process
  const splitString = str.split(' ');

  //Filter splitString have element include variable SIGN
  const filterSplitString = splitString.filter((word) => word.includes(SIGN));
  console.log(filterSplitString);
  let count = 0;

  filterSplitString.forEach((url) => {
    if (checkValidURL(url, DOMAIN_LIST, PROTOCOL_LIST, SIGN)) count++;
  });

  return count;
}

function checkValidURL(url, domainList, protocolList, sign) {
  //check format protocol://domain(/[path-name]) call X://Y

  //check only SIGN
  if (url.indexOf(sign) !== url.lastIndexOf(sign)) return false;

  //Check url start with list protocol

  const colonIdx = url.indexOf(':');
  const protocolURL = url.slice(0, colonIdx);

  for (let index = 0; index < protocolList.length; index++) {
    if (protocolURL === protocolList[index]) break; // Case valid and cancel loop

    if (index === protocolList.length - 1) return false; //when last loop that not find url startWith list protocol, will return false
  }

  //check domain end with list domain
  const idx = url.indexOf('/'); // Find first index character '/', if not find then return -1

  const y = url.slice(idx + 2).split('/'); // include both domain and path-name(If have)
  let domain = y[0];

  if (domain.length === 0) return false; // check if domain empty

  for (let index = 0; index < domainList.length; index++) {
    if (domain.endsWith(domainList[index])) break; // Case valid and cancel loop

    if (index === domainList.length - 1) return false; //when last loop that not find domain end with list domain, will return false
  }

  //check length name domain < 3
  //   let domainName;
  for (let index = 0; index < domainList.length; index++) {
    if (domain.includes(domainList[index])) {
      console.log(domain);
      domain = domain.replace(domainList[index], '');
    }
  } //replace domain to empty

  if (domain.length < 3) return false;

  return true;
}

console.log(
  countURLs(`${'Once again, nice to meet you.'} 
  ${'Currently, I have list website are :'} 
  ${'https://minhnguyen.com.yahoo,'} 
  ${'httpss://minhnguyen.com.yahoo,'} 
  ${'wsw://nguyenpham.com,'} 
  ${'http://a.com.vn/index.html,'} 
  ${'http://faq.pmnguyen1032000.com.vn/index.html.'} 
  ${' You can visit it.'}`)
);
