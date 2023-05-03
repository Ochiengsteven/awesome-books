function updateTime() {
  const date = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  let daySuffix;
  switch (day % 10) {
    case 1:
      daySuffix = 'st';
      break;
    case 2:
      daySuffix = 'nd';
      break;
    case 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
  }
  const year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  const amPm = hour >= 12 ? 'pm' : 'am';
  hour %= 12;
  hour = hour || 12;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  const time = `${month} ${day}${daySuffix} ${year}, ${hour}:${minute}:${second} ${amPm}`;
  const timeElement = document.getElementById('time');
  timeElement.innerHTML = time;
}

updateTime();
setInterval(updateTime, 1000);
