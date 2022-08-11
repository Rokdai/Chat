export const checkDateTime = (value) => {
  const date = new Date(value);

  let dayOfMonth = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  const diffMs = new Date() - date;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);

  dayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
  month = month < 10 ? `0${month}` : month;
  year = year.toString().slice(-2);
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
};
