const PROTOCOL_LIST = ['http', 'https', 'ws', 'wss,githubbbbb'];
const DOMAIN_LIST = ['.com', '.vn', '.com.vn'];
const SIGN = '://';

function findLastURL(strList) {
  //validate args
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  if (strList.some((url) => typeof url !== 'string')) return undefined;

  //process
  const filterStrList = strList.filter((url) => url.includes(SIGN));

  return filterStrList.reverse().find((url) => {
    const trimUrl = url.trim();
    if (!checkOnlySign(trimUrl)) return false;
    console.log('1');
    if (!checkProtocol(trimUrl, PROTOCOL_LIST)) return false;
    console.log('2');
    if (!checkEndDomain(trimUrl, DOMAIN_LIST)) return false;
    console.log('3');
    if (!checkLengthDomain(trimUrl, DOMAIN_LIST)) return false;
    console.log('4');
    return true;
  });
}

function checkProtocol(url, protocolList) {
  for (let index = 0; index < protocolList.length; index++) {
    if (url.startsWith(protocolList[index])) return true;
  }
  return false;
}

function checkOnlySign(url, sign) {
  if (url.indexOf(sign) === url.lastIndexOf(sign)) return true;

  return false;
}

function checkEndDomain(url, domainList) {
  const domain = url.split('/')[2];

  for (let index = 0; index < domainList.length; index++) {
    if (domain.endsWith(domainList[index])) return true;
  }

  return false;
}

function checkLengthDomain(url, domainList) {
  let domain = url.split('/')[2];

  for (let index = 0; index < domainList.length; index++) {
    if (domain.includes(domainList[index])) {
      const idx = domain.lastIndexOf(domainList[index]);
      domain = `${domain.slice(0, idx)}${domain.slice(idx + domainList[index].length)}`;
      console.log(domain);
      // domain = domain.replace();
    }
  }
  console.log(domain);

  return domain.length >= 3;
}
console.log(
  findLastURL([
    `${'https://mi.com.yahoo'}`,
    `${'wsw://nguyenpham.com'} `,
    `${'http://a.com.vn/index.html'} `,
    `${'http://faq.pmnguyen1032000.com.vn/index.html'}`,
    `${'https://b.vna.vn.com'}`,
  ])
);
console.log(`${'https://b.vn.a.com.vn'}`.indexOf('.vn'));
