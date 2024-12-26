export function dateDisplay(date) {
  const [day, month, year] = date.split("-");
  const classicDate = new Date(`${year}-${month}-${day}`);

  return new Intl.DateTimeFormat("sv-SE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(classicDate);
}

export function numberDisplay(number) {
  return new Intl.NumberFormat("sv-SE").format(number);
}

export function isExpired(expirationDate) {
  const now = new Date();
  const targetDate = new Date(expirationDate.split("-").reverse().join("-"));
  
  return (targetDate - now) <= 0;
}

export function interestDisplay(interest) {
  return `${(interest * 100).toFixed(1).replace('.', ',')}%`;
}