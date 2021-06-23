export function checkZero(data) {
  if (data.length == 1) {
    data = "0" + data;
  }
  return data;
}

export const formatDate = (d) => {
  var today = new Date();
  var day = today.getDate() + "";
  var month = today.getMonth() + 1 + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  console.log(day + "/" + month + "/" + year);
  return day + "/" + month + "/" + year;
};
