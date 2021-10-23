function sayHello(languageCode) {
  switch (languageCode) {
    case 'en': {
      return 'Hello';
      break;
    }
    case 'vi': {
      return 'Xin chào';
      break;
    }
    case 'fr': {
      return 'Bonjour';
      break;
    }
    case 'cn': {
      return 'Nǐn hǎo';
      break;
    }
    case 'ja': {
      return 'Konnichiwa';
      break;
    }
    case 'ko': {
      return 'Anyoung haseyo';
      break;
    }
    default: {
      return 'Hello';
    }
  }
}
