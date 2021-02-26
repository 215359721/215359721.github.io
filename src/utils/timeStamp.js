/*
* 把时间日期转成时间戳
* */
export default function getTimeStamp (time) {
  var date = new Date();
  date.setFullYear(time.substring(0, 4));
  date.setMonth(time.substring(5, 7) - 1);
  date.setDate(time.substring(8, 10));
  date.setHours(time.substring(11, 13));
  date.setMinutes(time.substring(14, 16));
  date.setSeconds(time.substring(17, 19));
  return Date.parse(date) / 1000;
}

export function dateFormat (str) {
  const pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
  return str.replace(pattern, '$1-$2-$3 $4:$5:$6');
}
