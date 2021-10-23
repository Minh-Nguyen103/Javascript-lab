function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age > 12) return 50000;

  return 20000;
}

console.log(getTicketPrice(71));
