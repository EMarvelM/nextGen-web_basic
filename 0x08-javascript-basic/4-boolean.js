// console.log((Date.now() / 1000) / (60 * 60 * 24 * 365) + 1970)
const date = new Date();

const day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const today = day[date.getDay()];
const toDate = date.getDay();

const isWeekend = toDate > 5;

console.log("Today is", today, "and its", isWeekend ? "its weekend" : "its weekday");
