// export const SERVER_URL = "http://localhost:8000";
export const SERVER_URL = "https://onlinestoreserver-hc3z.onrender.com";

export const ACTIONS = {
  ADD_BOOKMARK: "ADD_BOOKMARK",
  REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
  GET_BOOKMARKS: "GET_BOOKMARKS",
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  UPDATE_USER: "UPDATE_USER",
};

export const SERVER = {
  BOOKMARKS: "/bookmarks/",
  SIGN_IN: "/signin/",
  SIGN_UP: "/signup/",
};

export const saveUser = (userName) => {
  localStorage.setItem("iviUser", JSON.stringify(userName));
};

export const loadUser = () => {
  let data = localStorage.getItem("iviUser");
  if (!!data) {
    if (data.includes(`"`)) {
      return JSON.parse(data);
    } else {
      return data;
    }
  } else {
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem("iviUser");
};

export const getDate = (offset = 0) => {
  const today = new Date(new Date().getTime() + offset * 24 * 60 * 60 * 1000);
  // Format <"YYYY-MM-DD"> for mongoDb
  const result =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    today.getDate().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  return result;
};

export const genDate = (offset = 0) => {
  let date = new Date();
  date.setDate(date.getDate() + offset);
  return {
    day: weekdayShort[date.getDay()],
    date: date.getDate(),
    month: monthShort[date.getMonth()],
  };
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekdayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
