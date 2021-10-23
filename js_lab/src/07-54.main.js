//Create a function truncate(text, maxlength) that checks the length of the text and,
//if it exceeds maxLength - replaces the end of str with the ellipsis character `"ellipsis"`,
//to make its length equal to maxlength.

//ellipsis in UTF16: '\u2026' or code in Horizontal is 8230

function truncate(text, maxlength) {
  if (text.length <= maxlength) {
    return text;
  } else {
    return text.slice(0, maxlength - 1).concat('\u2026');
  }
}
console.log(truncate('Minh Nguyên', 10));
